'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import AppLayout from '@/components/app-layout'

export default function Error() {
	return (
		<AppLayout>
			<h1>Ha ocurrido un error</h1>
			<h3 className='text-center'>Por favor, intenta nuevamente</h3>
			<Link className={buttonVariants({ className: 'btn' })} href='/'>
				Volver al inicio
			</Link>
		</AppLayout>
	)
}
