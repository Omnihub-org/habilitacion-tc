'use server'

import { cookies } from 'next/headers'

import { db } from '@/lib/db'
import { LEAD_ID_COOKIE } from '@/lib/const'

export async function getOrCreateLead() {
	const cookieStore = await cookies()

	const id = cookieStore.get(LEAD_ID_COOKIE)?.value

	if (id) return await db.lead.findUnique({ where: { id } })

	const lead = await db.lead.create({ data: {} })

	// cookieStore.set(LEAD_ID_COOKIE, lead.id)

	return lead
}
