import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import AppLayout from '@/components/app-layout'

export default function ConfirmacionPage() {
	return (
		<AppLayout>
			<h1>Tu tarjeta ya se encuentra habilitada!!</h1>

			<h3 className='text-center text-bold'>¡Felicitaciones! Tu tarjeta de crédito ha sido habilitada con éxito.</h3>

			<Link className={buttonVariants({ className: 'btn' })} href='/'>
				Activar otra tarjeta
			</Link>
		</AppLayout>
	)
}
