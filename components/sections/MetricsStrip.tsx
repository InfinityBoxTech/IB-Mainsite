'use client';

import { motion } from 'framer-motion';

interface Metric {
	value: string;
	label: string;
	description?: string;
}

interface MetricsStripProps {
	metrics: Metric[];
}

export default function MetricsStrip({ metrics }: MetricsStripProps) {
	return (
		<section className='bg-neutral-900 text-white section-padding'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 items-center'>
					{metrics.map((metric, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							className='flex flex-col items-center justify-center text-center'
						>
							{/* Value */}
							<div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-emerald-500 mb-3 sm:mb-4 md:mb-5 leading-none tracking-tight'>
								{metric.value}
							</div>

							{/* Label */}
							<div className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 leading-tight'>
								{metric.label}
							</div>

							{/* Description */}
							{metric.description && (
								<div className='text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-[200px] mx-auto'>
									{metric.description}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
