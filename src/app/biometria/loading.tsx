import { buttonVariants } from '@/components/ui/button'
import Spinner from '@/components/spinner'

export default async function BiometryLoading() {
	return (
		<div
			className={buttonVariants({
				className: 'btn pointer-events-none cursor-not-allowed bg-muted-foreground uppercase opacity-50 hover:bg-foreground',
			})}
		>
			<Spinner />
		</div>
	)
}
