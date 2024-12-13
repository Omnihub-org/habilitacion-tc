import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { LEAD_ID_COOKIE } from './lib/const'

export function middleware(req: NextRequest) {
	const res = NextResponse.next()

	if (req.nextUrl.pathname === '/') {
		res.cookies.delete(LEAD_ID_COOKIE)
		return res
	}

	const lead = req.cookies.get(LEAD_ID_COOKIE)
	if (!lead) return NextResponse.redirect(new URL('/', req.url))

	return res
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|error).*)'],
}
