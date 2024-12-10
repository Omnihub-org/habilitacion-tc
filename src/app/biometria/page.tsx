import Link from 'next/link'

import { Neocheck } from '@/api/services/neocheck'
import { neocheckCustomization } from '@/lib/const'
import { buttonVariants } from '@/components/ui/button'
import AppLayout from '@/components/app-layout'

const messages = [
	'Busca un lugar bien iluminado, preferentemente con luz natural y frontal.',
	'Mantén tu rostro visible, sin sombras ni obstrucciones.',
	'Sigue las instrucciones en pantalla para completar la validación.',
]

export default async function BiometryPage() {
	const neocheck = new Neocheck({
		username: process.env.NEXT_PUBLIC_NEOCHECK_USER ?? '',
		password: process.env.NEXT_PUBLIC_NEOCHECK_PASS ?? '',
		customization: neocheckCustomization,
	})

	const { url } = await neocheck.getBiometricsUrl()

	return (
		<AppLayout>
			<h1>Validación de identidad</h1>

			<h3 className='text-bold text-pretty'>A continuación vamos a verificar tu identidad, para eso:</h3>

			<ol className='flex flex-col gap-4 list-decimal ml-[1.125rem] text-pretty'>
				{messages.map((message, i) => (
					<li key={i}>{message}</li>
				))}
			</ol>

			<Link className={buttonVariants({ className: 'btn uppercase' })} href={url}>
				Siguiente
			</Link>
		</AppLayout>
	)
}
