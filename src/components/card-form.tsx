'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import submitCardData from '@/app/api/actions/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CreditCard, { CreditCardMetadata, emptyCardMetadata } from '@/components/credit-card'
import Spinner from '@/components/spinner'

const MIN_CARD_LENGTH = 13

const createCardValidationSchema = (maxLength: number) =>
	z.object({
		cardNumber: z
			.string()
			.regex(/^\d+$/, { message: 'Solo se permiten números' })
			.refine((val) => val.length >= MIN_CARD_LENGTH && val.length <= maxLength, {
				message: `El número debe tener entre ${MIN_CARD_LENGTH} y ${maxLength} dígitos`,
			}),
	})

export default function CardForm() {
	const [cardMetadata, setCardMetadata] = useState<CreditCardMetadata>(emptyCardMetadata)
	const cardSchema = createCardValidationSchema(cardMetadata.maxLength)
	const form = useForm<z.infer<typeof cardSchema>>({ resolver: zodResolver(cardSchema), defaultValues: { cardNumber: '' } })

	const setErrorMsg = (msg: string) => form.setError('cardNumber', { message: `Tarjeta ${msg}. Por favor, verifique los datos` })

	const onSubmit = async (values: z.infer<typeof cardSchema>) => {
		if (cardMetadata.issuer === 'unknown') return setErrorMsg('no reconocida')
		if (!cardMetadata.isValid) return setErrorMsg('inválida')
		await submitCardData(values)
	}

	return (
		<div className='flex flex-col justify-center items-center w-full'>
			<CreditCard cardNumber={form.watch('cardNumber')} setCardMetadata={setCardMetadata} />

			<Form {...form}>
				<form
					noValidate
					onSubmit={form.handleSubmit(onSubmit)}
					className='p-4 mt-4 space-y-4 w-full rounded-lg shadow-lg bg-background'
				>
					<FormField
						control={form.control}
						name='cardNumber'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Número de Tarjeta</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='tel'
										placeholder='4321 4321 4321 4321'
										pattern='\d*'
										maxLength={cardMetadata.maxLength}
										onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ''))}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type='submit' className='btn' disabled={form.formState.isSubmitting || form.formState.isLoading}>
						{form.formState.isSubmitting || form.formState.isLoading ? <Spinner /> : 'Habilitar'}
					</Button>
				</form>
			</Form>
		</div>
	)
}
