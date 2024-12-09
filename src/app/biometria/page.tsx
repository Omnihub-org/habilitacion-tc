import AppLayout from '@/components/app-layout'
import { Button } from '@/components/ui/button'

const messages = [
	'Busca un lugar bien iluminado, preferentemente con luz natural y frontal.',
	'Mantén tu rostro visible, sin sombras ni obstrucciones.',
	'Sigue las instrucciones en pantalla para completar la validación.',
]

export default function BiometryPage() {
	return (
		<AppLayout>
			<h1>Validación de identidad</h1>

			<h3 className='text-bold text-pretty'>A continuación vamos a verificar tu identidad, para eso:</h3>

			<ol className='flex flex-col gap-4 list-decimal ml-[1.125rem] text-pretty'>
				{messages.map((message, i) => (
					<li key={i}>{message}</li>
				))}
			</ol>

			<Button className='uppercase btn'>Siguiente</Button>
		</AppLayout>
	)
}
