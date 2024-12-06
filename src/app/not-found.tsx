import Link from 'next/link'

import AppLayout from '@/components/app-layout'
import { buttonVariants } from '@/components/ui/button'

export default function BiometryPage() {
	return (
		<AppLayout>
			<h1>404 | Página no encontrada</h1>
			<h3>No pudimos encontrar la página que buscas</h3>
			<Link className={buttonVariants()} href='/'>
				Volver al inicio
			</Link>
		</AppLayout>
	)
}
