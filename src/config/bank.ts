import 'server-only'

import { ImageProps } from 'next/image'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' })

type Img = Pick<ImageProps, 'src' | 'height' | 'width'> & Partial<ImageProps>
type Font = ReturnType<typeof localFont> | ReturnType<typeof Inter>

type Bank = {
	name: string
	title?: string
	description?: string
	logo?: Img
	bg?: Img
	fonts?: Font[]
}

export const bank: Bank = {
	name: 'Banco Provincia',
	title: 'Habilitación de Tarjeta de Crédito',
	logo: { src: '/images/logo.png', height: 50, width: 159 },
	bg: { src: '/images/bg.jpg', height: 700, width: 1600 },
	fonts: [inter],
}
