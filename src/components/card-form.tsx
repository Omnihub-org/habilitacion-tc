'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CreditCard from '@/components/credit-card'

const formSchema = z.object({
	number: z.string().regex(/^[\d\s-]{14,16}$/, { message: 'El número debe tener entre 14 y 16 dígitos' }),
})

export default function CardForm() {
	const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema), defaultValues: { number: '' } })

	const onSubmit = (values: z.infer<typeof formSchema>) => console.log(values)

	return (
		<div className='flex flex-col justify-center items-center w-full'>
			<CreditCard number={form.watch('number')} />

			<Form {...form}>
				<form
					noValidate
					onSubmit={form.handleSubmit(onSubmit)}
					className='p-4 mt-4 space-y-4 w-full rounded-lg shadow-lg bg-background'
				>
					<FormField
						control={form.control}
						name='number'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Número de Tarjeta</FormLabel>
								<FormControl>
									<Input placeholder='4321 4321 4321 4321' maxLength={16} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type='submit' className='w-full'>
						Confirmar
					</Button>
				</form>
			</Form>
		</div>
	)
}
