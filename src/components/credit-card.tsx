import Cards from 'react-credit-cards'

const blank = { name: '', expiry: '', cvc: '', placeholders: { name: '' }, locale: { valid: '' } }

export default function CreditCard({ number }: { number?: string | number }) {
	return <Cards number={number ?? ''} {...blank} />
}
