'use client';

import {
	ArrowRight,
	TrendingDown,
	Award,
	CheckCircle,
	Trophy,
	DollarSign,
	Droplet,
	Leaf,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

const caseStudies = [
	{
		title: 'Client M',
		challenge: 'High operational costs and rising Scope 2 & 3 emissions from inefficient decentralized dishwashing operations',
		result: 'Cost-efficient, centralized operations with measurable sustainability impact',
		metrics: [
			{
				label: 'OPEX Reduction',
				value: '30%',
				icon: DollarSign,
				iconColor: 'text-rose-600',
				iconColorHover: 'group-hover:text-rose-700',
			},
			{
				label: 'CO₂ Reduction',
				value: '200K+',
				icon: Leaf,
				iconColor: 'text-emerald-600',
				iconColorHover: 'group-hover:text-emerald-700',
			},
			{
				label: 'Water Saved',
				value: '900K',
				icon: Droplet,
				iconColor: 'text-blue-600',
				iconColorHover: 'group-hover:text-blue-700',
			},
		],
		description:
			'Centralized offsite dishwashing operations delivering 30% OPEX reduction and significant Scope 2 & 3 emissions reduction.',
		href: '/insights/case-studies/client-m',
		gradient: 'from-emerald-500 to-teal-500',
	},
	{
		title: 'Client C',
		challenge: 'Maintaining hygiene and sustainability standards across 13 pan-India locations with high waste and water consumption',
		result: 'Scalable, compliant pan-India operations with strong Scope 2 & 3 reduction',
		metrics: [
			{
				label: 'Cost Savings',
				value: '15%',
				icon: DollarSign,
				iconColor: 'text-rose-600',
				iconColorHover: 'group-hover:text-rose-700',
			},
			{
				label: 'CO₂ Reduced',
				value: '140K',
				icon: Leaf,
				iconColor: 'text-emerald-600',
				iconColorHover: 'group-hover:text-emerald-700',
			},
			{
				label: 'Water Saved',
				value: '1.5M',
				icon: Droplet,
				iconColor: 'text-blue-600',
				iconColorHover: 'group-hover:text-blue-700',
			},
		],
		description:
			'Standardized pan-India offsite dishwashing operations across 13 locations, reducing costs and environmental impact at scale.',
		href: '/insights/case-studies/client-c',
		gradient: 'from-teal-500 to-cyan-500',
	},
];

export default function CaseStudiesSection() {
	return (
		<section className='relative bg-white section-padding py-16 md:py-24 overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-[0.02]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24'
				>
					<div className='flex justify-center mb-6'>
						<Badge
							showDot={true}
							leftText='Case'
							rightText='Studies'
							separator='·'
							variant='light'
							size='md'
						/>
					</div>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 mb-6 leading-tight'>
						Proven{' '}
						<span className='bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
							Results
						</span>
					</h2>
					<p className='text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
						Real outcomes from real deployments across India
					</p>
				</motion.div>

				{/* Case Studies Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-12'>
					{caseStudies.map((study, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{
								duration: 0.6,
								delay: idx * 0.2,
								ease: 'easeOut',
							}}
						>
							<Link href={study.href} className='block group h-full'>
								<div className='relative h-full bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] hover:border-emerald-400 hover:-translate-y-1 transition-all duration-500 flex flex-col'>
									{/* Gradient Accent */}
									<div
										className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${study.gradient} rounded-l-2xl z-10 group-hover:w-3 transition-all duration-500`}
									/>

									{/* Challenge - Hero Section */}
									<div className='relative bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 p-6 sm:p-8 border-b-4 border-rose-200 !min-h-[160px] sm:!min-h-[180px] md:!min-h-[200px] flex items-center group-hover:from-rose-100 group-hover:via-red-100 group-hover:to-orange-100 transition-all duration-500'>
										{/* Subtle Pattern */}
										<div
											className='absolute inset-0 opacity-[0.03]'
											style={{
												backgroundImage: `radial-gradient(circle at 2px 2px, #be123c 1px, transparent 0)`,
												backgroundSize: '24px 24px',
											}}
										></div>

										{/* Alert Glow */}
										<div className='absolute top-0 left-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl group-hover:bg-rose-400/30 transition-all duration-500'></div>

										<div className='relative z-10'>
											<div className='flex items-center gap-3 mb-4'>
												<div className='w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-110 group-hover:shadow-rose-500/40 transition-all duration-500'>
													<span className='text-white text-xl font-bold'>
														!
													</span>
												</div>
												<span className='text-xs font-bold text-rose-700 uppercase tracking-wider'>
													The Challenge
												</span>
											</div>
											<h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-rose-950 leading-tight'>
												{study.challenge}
											</h3>
										</div>
									</div>

									{/* Content Section */}
									<div className='p-8 sm:p-10 flex-1'>
										{/* Title */}
										<div className='mb-6'>
											<div className='text-xs font-medium text-emerald-600 uppercase tracking-wide mb-2'>
												Client
											</div>
											<h4 className='text-xl sm:text-2xl font-bold text-neutral-900 leading-tight group-hover:text-emerald-700 transition-colors'>
												{study.title}
											</h4>
										</div>

										{/* Metrics Grid */}
										<div className='grid grid-cols-3 gap-3 sm:gap-4 mb-6'>
											{study.metrics.map((metric, mIdx) => {
												const Icon = metric.icon;
												return (
													<div
														key={mIdx}
														className='text-center p-3 bg-neutral-50 rounded-lg border border-neutral-100 group-hover:bg-white group-hover:border-neutral-200 group-hover:shadow-md transition-all duration-300'
													>
														<div className='flex justify-center mb-2'>
															<Icon
																className={`w-4 h-4 ${metric.iconColor} ${metric.iconColorHover} transition-colors duration-300`}
															/>
														</div>
														<div className='text-lg sm:text-xl font-bold text-neutral-900 mb-1'>
															{metric.value}
														</div>
														<div className='text-[10px] sm:text-xs text-neutral-600 leading-tight'>
															{metric.label}
														</div>
													</div>
												);
											})}
										</div>

										{/* CTA */}
										<div className='inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all'>
											<span>View Full Case Study</span>
											<ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
										</div>
									</div>

									{/* Result - Hero Footer Section */}
									<div className='relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-6 sm:p-8 border-t-4 border-emerald-200 overflow-hidden !min-h-[160px] sm:!min-h-[180px] md:!min-h-[200px] flex items-center group-hover:from-emerald-100 group-hover:via-green-100 group-hover:to-teal-100 transition-all duration-500'>
										{/* Animated shine effect */}
										<div className='absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

										{/* Subtle dot pattern */}
										<div
											className='absolute inset-0 opacity-[0.03]'
											style={{
												backgroundImage: `radial-gradient(circle at 2px 2px, #047857 1px, transparent 0)`,
												backgroundSize: '24px 24px',
											}}
										></div>

										{/* Success Glow */}
										<div className='absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-all duration-500'></div>

										<div className='relative z-10 flex items-center gap-4 w-full'>
											<div className='w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:shadow-emerald-500/50 transition-all duration-500'>
												<CheckCircle
													className='w-6 h-6 text-white'
													strokeWidth={2.5}
												/>
											</div>
											<div className='flex-1'>
												<div className='text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1'>
													The Result
												</div>
												<div className='text-lg sm:text-xl md:text-2xl font-bold text-emerald-950 leading-tight'>
													{study.result}
												</div>
											</div>
										</div>
									</div>

									{/* Hover Effect - Brightens content instead of dimming */}
									<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 pointer-events-none' />
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* View All CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className='text-center'
				>
					<Link
						href='/insights/case-studies'
						className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group'
					>
						<span>View All Case Studies</span>
						<ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

