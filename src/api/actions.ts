'use server'

import { redirect } from 'next/navigation'

export default async function submitCardData({ cardNumber }: { cardNumber: string }) {
	// WARN: This is a mock API call
	console.log('Card: ', cardNumber)
	await new Promise((resolve) => setTimeout(resolve, 1200))

	redirect('/biometria')
}
