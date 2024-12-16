import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import AppLayout from '@/components/app-layout'

export default function EnabledCardPage() {
	return (
		<AppLayout>
			<h1>Tarjeta ya habilitada</h1>
			<h3 className='text-center'>Tu tarjeta de crédito ya se encuentra habilitada</h3>
			<Link className={buttonVariants({ className: 'btn' })} href='/'>
				Volver al inicio
			</Link>
		</AppLayout>
	)
}
