import { ValueDelivered as ValueDeliveredType, AccentColors } from './types';

interface ValueDeliveredProps {
	valueDelivered: ValueDeliveredType[];
	colors: AccentColors;
}

export default function ValueDelivered({
	valueDelivered,
	colors,
}: ValueDeliveredProps) {
	return (
		<div className='md:col-span-6 xl:col-span-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-full flex flex-col'>
			<div
				className={`border-l-4 pl-4 sm:pl-6 md:pl-8 lg:pl-10 py-4 sm:py-6 md:py-8 lg:py-10 h-full flex flex-col gap-6 sm:gap-8 relative`}
				style={{
					borderColor: colors.border.includes('emerald') ? 'rgba(16, 185, 129, 0.8)' : colors.border.includes('blue') ? 'rgba(59, 130, 246, 0.8)' : colors.border.includes('orange') ? 'rgba(249, 115, 22, 0.8)' : colors.border.includes('purple') ? 'rgba(168, 85, 247, 0.8)' : 'rgba(100, 116, 139, 0.8)',
					boxShadow: `inset 4px 0 16px -2px ${colors.border.includes('emerald') ? 'rgba(20, 184, 166, 0.6)' : colors.border.includes('blue') ? 'rgba(79, 70, 229, 0.6)' : colors.border.includes('orange') ? 'rgba(251, 146, 60, 0.6)' : colors.border.includes('purple') ? 'rgba(192, 132, 252, 0.6)' : 'rgba(148, 163, 184, 0.6)'}`
				}}
			>
				<h3 className='text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-600'>
					Value Delivered
				</h3>
				<div className='flex flex-col gap-6 sm:gap-8'>
					{valueDelivered.map((value, i) => (
						<div key={i}>
							<h4 className='text-base sm:text-lg md:text-xl font-bold text-neutral-900 mb-2 sm:mb-3 leading-tight'>
								{value.title}
							</h4>
							<p className='text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed'>
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
