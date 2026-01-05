'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Building2, CheckCircle2, Leaf, TrendingUp } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface Metric {
	value: string;
	label: string;
	description?: string;
}

interface MetricsStripProps {
	metrics: Metric[];
}

const iconMap: Record<string, any> = {
	Cities: MapPin,
	Facilities: Building2,
	'Compliance Rate': CheckCircle2,
	'Waste Reduction': Leaf,
};

export default function MetricsStrip({ metrics }: MetricsStripProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: true, margin: '-100px' });

	return (
		<section className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 section-padding py-16 md:py-24 overflow-hidden'>
			{/* Grid Pattern */}
			<div className='absolute inset-0 opacity-5' style={{
				backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
				backgroundSize: '50px 50px'
			}}></div>

			{/* Gradient Orbs */}
			<div className='absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl'></div>

			<div className='container mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28'
				>
					<div className='flex justify-center mb-6'>
						<Badge
							showDot={true}
							leftText='Impact'
							rightText='Metrics'
							separator='·'
							variant='dark'
							size='md'
						/>
					</div>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight'>
						Driving{' '}
						<span className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
							Measurable Impact
						</span>
					</h2>
					<p className='text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed'>
						Real numbers from real operations across India
					</p>
				</motion.div>

				{/* Metrics Grid */}
				<div
					ref={containerRef}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16'
				>
					{metrics.map((metric, idx) => {
						const Icon = iconMap[metric.label];
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: idx * 0.15,
									ease: 'easeOut'
								}}
								className='relative group'
							>
								{/* Card */}
								<div className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col'>
									{/* Icon */}
									{Icon && (
										<div className='mb-4 sm:mb-6 flex justify-center'>
											<div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-300'>
												<Icon className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white' />
											</div>
										</div>
									)}

									{/* Value */}
									<div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-3 sm:mb-4 leading-none'>
										{metric.value}
									</div>

									{/* Label */}
									<div className='text-base sm:text-lg md:text-xl font-bold text-emerald-400 mb-2'>
										{metric.label}
									</div>

									{/* Description */}
									<div className='text-xs sm:text-sm text-neutral-400 mt-auto whitespace-nowrap'>
										{metric.description || '\u00A0'}
									</div>

									{/* Hover Effect */}
									<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300'></div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
