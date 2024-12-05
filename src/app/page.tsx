import AppLayout from '@/components/app-layout'
import CardForm from '@/components/card-form'

export default function Home() {
	return (
		<AppLayout>
			<h1>Bienvenido a la plataforma de habilitaciones del Banco Provincia</h1>
			<CardForm />
		</AppLayout>
	)
}
