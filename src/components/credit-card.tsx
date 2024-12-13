'use client'

import { Dispatch, SetStateAction, useCallback } from 'react'
import Cards, { type CallbackArgument as T } from 'react-credit-cards'

export type CreditCardMetadata = T & {
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

	const handleCallback = useCallback((type: T, isValid: boolean) => setCardMetadata({ ...type, isValid }), [setCardMetadata])

	return <Cards number={cardNumber} callback={handleCallback} {...emptyCardFields} />
}
