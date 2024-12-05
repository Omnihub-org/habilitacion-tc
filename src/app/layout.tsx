import type { Metadata } from 'next'

import './globals.scss'
import { bank } from '@/config/bank'
import BankImg from '@/components/bank-img'

export const metadata: Metadata = { ...bank }

const fonts = bank?.fonts?.map((font) => ('variable' in font ? font.variable : font.className)).join(' ')

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={`${fonts} antialiased`}>
				<main className='flex p-4 h-dvh'>{children}</main>
				<BankImg type='bg' />
			</body>
		</html>
	)
}
