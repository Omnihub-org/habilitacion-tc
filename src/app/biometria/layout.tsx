import AppLayout from '@/components/app-layout'

const messages = [
	'Busca un lugar bien iluminado, preferentemente con luz natural y frontal.',
	'Mantén tu rostro visible, sin sombras ni obstrucciones.',
	'Sigue las instrucciones en pantalla para completar la validación.',
]

export default async function BiometryLayout({ children }: { children: React.ReactNode }) {
	return (
		<AppLayout>
			<h1>Validación de identidad</h1>

			<h3 className='text-bold'>A continuación vamos a verificar tu identidad, para eso:</h3>

			<ol className='flex flex-col gap-4 list-decimal ml-[1.125rem]'>
				{messages.map((message, i) => (
					<li key={i}>{message}</li>
				))}
			</ol>

			{children}
		</AppLayout>
	)
}
