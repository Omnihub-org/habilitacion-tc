import Link from 'next/link'

import AppLayout from '@/components/app-layout'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
	return (
		<AppLayout>
			<h1>404 | Página no encontrada</h1>
			<h3>No pudimos encontrar la página que buscas</h3>
			<Link className={buttonVariants({ className: 'btn uppercase' })} href='/'>
				Volver al inicio
			</Link>
		</AppLayout>
	)
}
