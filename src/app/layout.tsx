import type { Metadata } from 'next'

import './globals.scss'
import { bank } from '@/config/bank'

export const metadata: Metadata = { ...bank }

const fonts = bank?.fonts?.map((font) => ('variable' in font ? font.variable : font.className)).join(' ')

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`${fonts} antialiased`}>{children}</body>
		</html>
	)
}
