'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, MapPin, Building2, CheckCircle2, Leaf } from 'lucide-react';

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
		<section className='relative bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 section-padding overflow-hidden'>
			{/* Decorative Background Elements */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24'
				>
					<div className='inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 rounded-full mb-6'>
						<TrendingUp className='w-4 h-4 text-emerald-600' />
						<span className='text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider'>
							Impact Metrics
						</span>
					</div>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight'>
						Numbers That{' '}
						<span className='relative inline-block'>
							<span className='relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
								Speak
							</span>
							<span className='absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-cyan-400/40 rounded-full origin-left'></span>
						</span>
					</h2>
					<p className='text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
						Measurable impact across India's operations landscape
					</p>
				</motion.div>

				{/* Metrics Grid */}
				<div
					ref={containerRef}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12'
				>
					{metrics.map((metric, idx) => {
						const Icon = iconMap[metric.label] || TrendingUp;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30, scale: 0.9 }}
								animate={
									isInView
										? { opacity: 1, y: 0, scale: 1 }
										: { opacity: 0, y: 30, scale: 0.9 }
								}
								transition={{
									duration: 0.6,
									delay: idx * 0.15,
									type: 'spring',
									stiffness: 100,
								}}
								whileHover={{ y: -8, scale: 1.02 }}
								className='group relative'
							>
								{/* Card */}
								<div className='relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-emerald-200 h-full flex flex-col items-center text-center overflow-hidden'>
									{/* Gradient Overlay on Hover */}
									<div className='absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 group-hover:via-emerald-50/30 group-hover:to-transparent transition-all duration-500' />

									{/* Icon */}
									<motion.div
										className='relative z-10 mb-6 sm:mb-8'
										whileHover={{ rotate: [0, -10, 10, -10, 0] }}
										transition={{ duration: 0.5 }}
									>
										<div className='w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow duration-500'>
											<Icon className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white' />
										</div>
									</motion.div>

									{/* Value */}
									<motion.div
										className='relative z-10 mb-3 sm:mb-4'
										initial={{ scale: 0 }}
										animate={
											isInView ? { scale: 1 } : { scale: 0 }
										}
										transition={{
											delay: idx * 0.15 + 0.3,
											type: 'spring',
											stiffness: 200,
											damping: 15,
										}}
									>
										<div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-none tracking-tight'>
											{metric.value}
										</div>
									</motion.div>

									{/* Label */}
									<div className='relative z-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3 leading-tight'>
										{metric.label}
									</div>

									{/* Description */}
									{metric.description && (
										<div className='relative z-10 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-[250px]'>
											{metric.description}
										</div>
									)}

									{/* Decorative Corner Accent */}
									<div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
