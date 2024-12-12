import React from 'react'

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import BankImg from '@/components/bank-img'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [title, ...content] = React.Children.toArray(children)

	return (
		<Card className='from-43% m-auto grid max-h-screen w-full max-w-md grid-rows-[auto_auto_1fr] overflow-hidden text-pretty bg-transparent bg-gradient-to-b from-secondary to-secondary/75 p-4 text-foreground'>
			<CardHeader className='flex flex-col gap-4 items-center p-4 text-center'>
				<BankImg type='logo' />
				<CardTitle className='flex flex-col items-center'>{title}</CardTitle>
			</CardHeader>

			<hr className='justify-self-center w-12 rounded border-2 border-gray-400' />

			<ScrollArea>
				<CardContent className='flex flex-col gap-4 justify-between items-center p-4 h-full'>{content}</CardContent>
			</ScrollArea>
		</Card>
	)
}
