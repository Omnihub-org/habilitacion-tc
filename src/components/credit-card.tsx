'use client'

import { Dispatch, SetStateAction } from 'react'
import Cards from 'react-credit-cards'

export type CreditCardMetadata = {
	issuer: string
	maxLength: number
	isValid: boolean
}

type CreditCardProps = {
	cardNumber: string
	setCardMetadata: Dispatch<SetStateAction<CreditCardMetadata>>
}

export const emptyCardMetadata = { issuer: 'unknown', maxLength: 16, isValid: false }
const emptyCardFields = { name: '', expiry: '', cvc: '', placeholders: { name: '' }, locale: { valid: '' } }

export default function CreditCard(creditCardProps: CreditCardProps) {
	const { cardNumber, setCardMetadata } = creditCardProps
	return <Cards number={cardNumber} callback={(type, isValid) => setCardMetadata({ ...type, isValid })} {...emptyCardFields} />
}
