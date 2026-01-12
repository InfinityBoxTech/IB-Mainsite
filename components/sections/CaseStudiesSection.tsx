'use client';

import {
	ArrowRight,
	DollarSign,
	Droplet,
	Leaf,
	CheckCircle,
	TrendingUp,
	MapPin,
	Building2,
	Users,
	Recycle,
	Zap,
	BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Badge from '@/components/ui/Badge';

const caseStudies = [
	{
		title: 'Client M',
		industry: 'Global Technology / Services',
		location: 'Bangalore',
		serviceModel: 'Offsite Centralized',
		challenge: 'High operational costs and rising Scope 2 & 3 emissions from inefficient decentralized dishwashing operations',
		result: 'Cost-efficient, centralized operations delivering measurable Scope 2 & 3 reduction',
		primaryMetrics: [
			{
				label: 'OPEX Reduction',
				value: '30%',
				subValue: 'INR 80 Lakhs annually',
				icon: DollarSign,
				color: 'from-emerald-500 to-teal-500',
				bgColor: 'bg-emerald-50',
				textColor: 'text-emerald-700',
				borderColor: 'border-emerald-200',
			},
			{
				label: 'CO₂ Reduced',
				value: '200K+',
				subValue: 'kg annually (Scope 2 & 3)',
				icon: Leaf,
				color: 'from-emerald-500 to-teal-500',
				bgColor: 'bg-emerald-50',
				textColor: 'text-emerald-700',
				borderColor: 'border-emerald-200',
			},
			{
				label: 'Water Saved',
				value: '900K',
				subValue: 'litres annually',
				icon: Droplet,
				color: 'from-blue-500 to-cyan-500',
				bgColor: 'bg-blue-50',
				textColor: 'text-blue-700',
				borderColor: 'border-blue-200',
			},
		],
		secondaryMetrics: [
			{
				label: 'Waste Reduced',
				value: '41,000',
				unit: 'kg',
				icon: Recycle,
			},
		],
		description:
			'Centralized offsite dishwashing operations delivering 30% OPEX reduction and significant Scope 2 & 3 emissions reduction.',
		href: '/insights/case-studies/client-m',
		gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
		accentColor: 'emerald',
		cardTheme: 'emerald',
	},
	{
		title: 'Client C',
		industry: 'Global Technology & Services',
		location: 'Pan India',
		serviceModel: '13 Locations',
		challenge: 'Maintaining hygiene and sustainability standards across 13 pan-India locations with high waste and water consumption',
		result: 'Scalable, compliant pan-India operations delivering measurable Scope 2 & 3 reduction',
		primaryMetrics: [
			{
				label: 'Cost Savings',
				value: '15%',
				subValue: 'INR 30 Lakhs annually',
				icon: DollarSign,
				color: 'from-emerald-500 to-teal-500',
				bgColor: 'bg-emerald-50',
				textColor: 'text-emerald-700',
				borderColor: 'border-emerald-200',
			},
			{
				label: 'CO₂ Reduced',
				value: '140K',
				subValue: 'kg annually (Scope 2 & 3)',
				icon: Leaf,
				color: 'from-emerald-500 to-teal-500',
				bgColor: 'bg-emerald-50',
				textColor: 'text-emerald-700',
				borderColor: 'border-emerald-200',
			},
			{
				label: 'Water Saved',
				value: '1.5M',
				subValue: 'litres annually',
				icon: Droplet,
				color: 'from-blue-500 to-cyan-500',
				bgColor: 'bg-blue-50',
				textColor: 'text-blue-700',
				borderColor: 'border-blue-200',
			},
		],
		secondaryMetrics: [
			{
				label: 'Waste Diverted',
				value: '100K+',
				unit: 'kg',
				icon: Recycle,
			},
		],
		operationalScale: {
			locations: '13',
			employees: '25,000+',
			platesPerDay: '14,000',
			glassesPerDay: '50,000',
			pickupFrequency: 'Twice-daily',
		},
		infinityBoxInvestment: 'INR 25 Lakhs',
		description:
			'Standardized pan-India offsite dishwashing operations across 13 locations, reducing costs and environmental impact at scale.',
		href: '/insights/case-studies/client-c',
		gradient: 'from-blue-500 via-indigo-500 to-purple-500',
		accentColor: 'blue',
		cardTheme: 'blue',
	},
];

export default function CaseStudiesSection() {
	return (
		<section className='relative bg-gradient-to-b from-white via-neutral-50/50 to-white section-padding py-20 md:py-28 overflow-hidden'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<motion.div
					className='absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-200/10 rounded-full blur-3xl'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.1, 0.15, 0.1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className='absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-200/10 rounded-full blur-3xl'
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.1, 0.15, 0.1],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
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
					className='text-center mb-16 sm:mb-20 md:mb-24'
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
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto mb-16'>
					{caseStudies.map((study, idx) => (
						<CaseStudyCard key={idx} study={study} index={idx} />
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

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
	const cardRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

	return (
		<motion.div
			ref={cardRef}
			style={{ y, opacity }}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{
				duration: 0.8,
				delay: index * 0.2,
				ease: [0.16, 1, 0.3, 1],
			}}
			className='h-full'
		>
			<Link href={study.href} className='block group h-full'>
				<div className='relative h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)] transition-all duration-700 flex flex-col border border-neutral-100 hover:border-emerald-300/50'>
					{/* Animated Gradient Border Glow */}
					<motion.div
						className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 blur-2xl`}
						animate={{
							scale: [1, 1.05, 1],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
					{/* Card-specific border accent */}
					<div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${study.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

					{/* Top Section - Challenge & Client Info */}
					<div className='relative'>
						{/* Challenge Header */}
						<div className='relative overflow-hidden bg-gradient-to-br from-rose-50 via-red-50/50 to-orange-50/30 p-8 sm:p-10 border-b border-rose-100/50'>
							{/* Animated Pattern */}
							<div
								className='absolute inset-0 opacity-[0.04]'
								style={{
									backgroundImage: `radial-gradient(circle at 2px 2px, #be123c 1px, transparent 0)`,
									backgroundSize: '24px 24px',
								}}
							/>

							<div className='relative z-10'>
								{/* Challenge Badge */}
								<div className='flex items-center gap-3 mb-6'>
									<motion.div
										className='w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-xl shadow-rose-500/40'
										whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
										transition={{ type: 'spring', stiffness: 300 }}
									>
										<span className='text-white text-2xl font-bold'>!</span>
									</motion.div>
									<div>
										<div className='text-xs font-bold text-rose-600 uppercase tracking-widest mb-1'>
											The Challenge
										</div>
										<div className='h-1 w-20 bg-gradient-to-r from-rose-500 to-transparent rounded-full' />
									</div>
								</div>

								{/* Challenge Text */}
								<h3 className='text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight mb-6 group-hover:text-rose-900 transition-colors'>
									{study.challenge}
								</h3>

								{/* Client Info Row */}
								<div className='flex flex-wrap items-center gap-4 pt-4 border-t border-rose-100'>
									<div>
										<div className='text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1'>
											Client
										</div>
										<div className='text-xl font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors'>
											{study.title}
										</div>
									</div>
									<div className='h-6 w-px bg-neutral-200' />
									<div className='flex items-center gap-2 text-sm text-neutral-600'>
										<Building2 className='w-4 h-4 text-neutral-400' />
										<span>{study.industry}</span>
									</div>
									<div className='h-6 w-px bg-neutral-200' />
									<div className='flex items-center gap-2 text-sm'>
										<MapPin className='w-4 h-4 text-neutral-400' />
										{study.location === 'Pan India' ? (
											<span className='font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 rounded-lg shadow-md border border-blue-500/30'>
												{study.location}
											</span>
										) : (
											<span className='font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-1.5 rounded-lg shadow-md border border-emerald-500/30'>
												{study.location}
											</span>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Middle Section - Metrics Showcase */}
					<div className='flex-1 p-8 sm:p-10 bg-white'>
						{/* Primary Metrics - Large Display */}
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
							{study.primaryMetrics.map((metric, mIdx) => {
								const Icon = metric.icon;
								const isSavings = metric.label === 'OPEX Reduction' || metric.label === 'Cost Savings';
								return (
									<motion.div
										key={mIdx}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.2 + mIdx * 0.1 }}
										className='relative group/metric flex flex-col'
									>
										<div
											className={`relative p-5 rounded-2xl ${metric.bgColor} border-2 ${metric.borderColor} group-hover/metric:shadow-xl transition-all duration-500 overflow-hidden flex flex-col flex-1 ${
												isSavings ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-white' : ''
											}`}
										>
											{/* Pulse/Neon Effect for Savings */}
											{isSavings && (
												<>
													<motion.div
														className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-20`}
														animate={{
															opacity: [0.2, 0.4, 0.2],
														}}
														transition={{
															duration: 2,
															repeat: Infinity,
															ease: 'easeInOut',
														}}
													/>
													<motion.div
														className='absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl blur-md opacity-60'
														animate={{
															opacity: [0.4, 0.8, 0.4],
															scale: [1, 1.05, 1],
														}}
														transition={{
															duration: 2.5,
															repeat: Infinity,
															ease: 'easeInOut',
														}}
													/>
												</>
											)}

											{/* Gradient Overlay */}
											<div
												className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover/metric:opacity-10 transition-opacity duration-500`}
											/>

											<div className='relative z-10 flex flex-col flex-1'>
												{/* Icon */}
												<div className='flex justify-center mb-4 flex-shrink-0'>
													<motion.div
														className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} shadow-lg`}
														whileHover={{ scale: 1.1, rotate: 5 }}
													>
														<Icon className='w-6 h-6 text-white' />
													</motion.div>
												</div>

												{/* Value */}
												<div className='text-center mb-2 flex-shrink-0'>
													<div className='text-3xl sm:text-4xl font-bold text-neutral-900 mb-1'>
														{metric.value}
													</div>
													<div className='text-xs font-semibold text-neutral-500 min-h-[32px] flex items-center justify-center'>
														{metric.subValue}
													</div>
												</div>

												{/* Label - Push to bottom */}
												<div
													className={`text-xs font-bold ${metric.textColor} text-center mt-auto pt-3 border-t ${metric.borderColor}`}
												>
													{metric.label}
												</div>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>

						{/* Secondary Metrics & Operational Scale */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							{/* Secondary Metrics */}
							{study.secondaryMetrics && study.secondaryMetrics.length > 0 && (
								<div className='space-y-3'>
									<div className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3'>
										Sustainability Impact
									</div>
									{study.secondaryMetrics.map((metric, mIdx) => {
										const Icon = metric.icon;
										return (
											<motion.div
												key={mIdx}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.2 + 0.4 }}
												className='flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 group-hover:bg-white group-hover:shadow-md transition-all'
											>
												<div className='p-2 rounded-lg bg-emerald-100'>
													<Icon className='w-5 h-5 text-emerald-600' />
												</div>
												<div className='flex-1'>
													<div className='text-lg font-bold text-neutral-900'>
														{metric.value} {metric.unit}
													</div>
													<div className='text-xs text-neutral-600'>{metric.label}</div>
												</div>
											</motion.div>
										);
									})}
								</div>
							)}

							{/* Operational Scale (for Client C) */}
							{study.operationalScale && (
								<div className='space-y-3'>
									<div className='text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-2'>
										<Zap className='w-4 h-4' />
										Operational Scale
									</div>
									<div className='space-y-2'>
										{Object.entries(study.operationalScale).map(([key, value], idx) => (
											<motion.div
												key={key}
												initial={{ opacity: 0, x: 20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.2 + 0.5 + idx * 0.05 }}
												className='flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100 group-hover:bg-white group-hover:shadow-sm transition-all'
											>
												<span className='text-sm text-neutral-600 capitalize'>
													{key.replace(/([A-Z])/g, ' $1').trim()}:
												</span>
												<span className='text-sm font-bold text-neutral-900'>{value}</span>
											</motion.div>
										))}
									</div>
									{study.infinityBoxInvestment && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 + 0.7 }}
											className='mt-4 p-4 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200'
										>
											<div className='text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1'>
												Implementation Investment (by InfinityBox)
											</div>
											<div className='text-xl font-bold text-neutral-900'>
												{study.infinityBoxInvestment}
											</div>
										</motion.div>
									)}
								</div>
							)}
						</div>

						{/* CTA */}
						<div className='mt-8 pt-6 border-t border-neutral-100'>
							<motion.div
								className='inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors'
								whileHover={{ x: 4 }}
							>
								<span>View Full Case Study</span>
								<ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
							</motion.div>
						</div>
					</div>

					{/* Bottom Section - Result */}
					<div className='relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50/30 p-8 sm:p-10 border-t border-emerald-100/50'>
						{/* Animated Pattern */}
						<div
							className='absolute inset-0 opacity-[0.04]'
							style={{
								backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
								backgroundSize: '24px 24px',
							}}
						/>

						{/* Shine Effect */}
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full'
							transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
						/>

						<div className='relative z-10'>
							<div className='flex items-start gap-4'>
								<motion.div
									className='w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-500/40 flex-shrink-0'
									whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
									transition={{ type: 'spring', stiffness: 300 }}
								>
									<CheckCircle className='w-7 h-7 text-white' strokeWidth={2.5} />
								</motion.div>
								<div className='flex-1'>
									<div className='text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2'>
										The Result
									</div>
									<div className='h-1 w-20 bg-gradient-to-r from-emerald-500 to-transparent rounded-full mb-4' />
									<h4 className='text-xl sm:text-2xl font-bold text-neutral-900 leading-tight group-hover:text-emerald-900 transition-colors'>
										{study.result}
									</h4>
								</div>
							</div>
						</div>
					</div>

					{/* Corner Accent */}
					<div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none' />
				</div>
			</Link>
		</motion.div>
	);
}
