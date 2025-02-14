import Link from 'next/link'

import { Neocheck } from '@/app/api/services/biometry'
import { neocheckCustomization as customization } from '@/lib/const'
import { buttonVariants } from '@/components/ui/button'

const password = process.env.NEXT_PUBLIC_NEOCHECK_PASS ?? ''
const username = process.env.NEXT_PUBLIC_NEOCHECK_USER ?? ''

export default async function BiometryPage() {
	const neocheck = new Neocheck({ username, password, customization })
	const { url } = await neocheck.getBiometryUrl()

	return (
		<Link className={buttonVariants({ className: 'btn uppercase' })} href={url}>
			Siguiente
		</Link>
	)
}
