import Image from 'next/image'

import { bank } from '@/config/bank'
import { cn } from '@/lib/utils'

export default function BankImg({ type }: Readonly<{ type: 'logo' | 'bg' }>) {
	const img = bank[type]
	const bgExtraClass = 'fixed inset-0 z-[-1] min-h-full min-w-full object-cover object-center'

	if (!img) return null
	return <Image {...img} className={cn(type === 'bg' && bgExtraClass, img?.className)} priority draggable={false} alt={type} />
}
