'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerAction } from 'zsa'

import { db } from '@/lib/db'
import { baseCardSchema } from '@/schemas/card'
import { LEAD_ID_COOKIE } from '@/lib/const'

export const registerCardLead = createServerAction()
	.input(baseCardSchema)
	.handler(async ({ input: { cardNumber } }) => {
		const lead = await db.lead.upsert({ where: { cardNumber }, create: { cardNumber }, update: {} })

		if (lead.isEnabled) throw new Error('Esta tarjeta ya fue habilitada anteriormente')

		const cookieStore = await cookies()
		cookieStore.set(LEAD_ID_COOKIE, lead.id)

		// WARN: This is a mock API call
		await new Promise((resolve) => setTimeout(resolve, 1200))

		redirect('/biometria')
	})
