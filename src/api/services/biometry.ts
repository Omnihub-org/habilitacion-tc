import 'server-only'

import { bank } from '@/config/bank'

export enum BiometryStatus {
	PENDING = 'PENDING',
	COMPLETED = 'COMPLETED',
	FAILED = 'FAILED',
}

type NeocheckConfig = {
	username: string
	password: string
	apiUrl?: string
	customization?: {
		fontUrl?: string
		fontSizeTitle?: string
		fontSizeSubtitle?: string
		backgroundColor?: string
		mainColor?: string
		secondaryColor?: string
		buttonColor?: string
		buttonTextColor?: string
		buttonBorderRadius?: number
		language?: string
		linkExpirationHours?: number
	}
}

export class Neocheck {
	constructor(private readonly config: NeocheckConfig) {}

	private readonly apiUrl = process.env.NEXT_PUBLIC_NEOCHECK_API_URL ?? ''
	private readonly siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''
	private accessToken?: string

	private getApiUrl() {
		return this.apiUrl
	}

	private getSiteUrl() {
		return this.siteUrl
	}

	private async getAccessToken() {
		const response = await fetch(`${this.getApiUrl()}/authorization/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.config.username,
				password: this.config.password,
			}),
		})

		const data = await response.json()
		this.accessToken = data.access_token

		if (!this.accessToken) throw new Error('Failed to get access token')

		return this.accessToken
	}

	async getBiometryStatus({ verificationId }: { verificationId: string }) {
		const accessToken = await this.getAccessToken()

		const response = await fetch(`${this.getApiUrl()}/v1/VideoIdentifications/${verificationId}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})

		const data = await response.json()

		const statusMap = {
			3: BiometryStatus.PENDING,
			4: BiometryStatus.COMPLETED,
		}

		return statusMap[data.status as keyof typeof statusMap] ?? BiometryStatus.FAILED
	}

	async getBiometryUrl() {
		const accessToken = await this.getAccessToken()

		const response = await fetch(`${this.getApiUrl()}/v1/VideoIdentifications/unattended/link?externalIdentifier=${1}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				companyName: bank.name,
				redirectUrlOk: `${this.getSiteUrl()}/confirmacion`,
				redirectUrlKo: `${this.getSiteUrl()}/error`,
				redirectToMobile: true,
				allowContinueOnQrCode: true,
				skipDocumentSelection: true,
				...(this.config.customization || {}),
			}),
		})

		const url = await response.text()

		if (!url) throw new Error('Failed to get biometry url')

		return { url, verificationId: url.split('/').pop() ?? '' }
	}
}
