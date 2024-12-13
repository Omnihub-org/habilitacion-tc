import { z } from 'zod'

import { MIN_CARD_LENGTH, MAX_CARD_LENGTH } from '@/lib/const'

export const baseCardSchema = z.object({
	cardNumber: z
		.string()
		.regex(/^\d+$/, { message: 'Solo se permiten números' })
		.min(MIN_CARD_LENGTH, { message: `El número debe tener mínimo ${MIN_CARD_LENGTH} dígitos` })
		.max(MAX_CARD_LENGTH, { message: `El número debe tener máximo ${MAX_CARD_LENGTH} dígitos` }),
})
