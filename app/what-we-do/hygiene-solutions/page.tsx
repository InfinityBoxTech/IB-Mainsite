'use client';

import type { Metadata } from 'next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
	Droplets,
	CheckCircle,
	ArrowRight,
	Sparkles,
	TrendingUp,
	Shield,
	Target,
	Zap,
	BarChart3,
	Users,
	Clock,
	Leaf,
} from 'lucide-react';

const ecosystemItems = [
	{
		icon: Droplets,
		title: 'Chemical Management',
		description: 'Automated dispensing systems with precise dosing control',
	},
	{
		icon: Shield,
		title: 'Surface Sanitization',
		description: 'Protocol-driven cleaning for all touchpoints',
	},
	{
		icon: Sparkles,
		title: 'Restroom Hygiene',
		description: 'Comprehensive maintenance and monitoring',
	},
	{
		icon: Target,
		title: 'Waste Management',
		description: 'Integrated disposal and recycling protocols',
	},
	{
		icon: Zap,
		title: 'Air Quality Support',
		description: 'Ventilation optimization and monitoring',
	},
	{
		icon: Leaf,
		title: 'Pest Control',
		description: 'Preventive coordination and compliance',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Controlled Dispensing',
		description:
			'Automated systems ensure precise chemical dosing, reducing waste and ensuring consistency across all locations.',
		icon: Target,
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		number: '02',
		title: 'Audit-Ready Documentation',
		description:
			'Complete traceability from chemical selection to application, with real-time compliance reporting.',
		icon: BarChart3,
		gradient: 'from-emerald-500 to-teal-500',
	},
	{
		number: '03',
		title: 'Training-Backed Execution',
		description:
			'Comprehensive training programs ensure your team understands protocols and can execute them reliably.',
		icon: Users,
		gradient: 'from-purple-500 to-pink-500',
	},
	{
		number: '04',
		title: 'Continuous Monitoring',
		description:
			'Technology-enabled monitoring tracks compliance, identifies issues early, and drives continuous improvement.',
		icon: Clock,
		gradient: 'from-orange-500 to-red-500',
	},
];

const businessValues = [
	{ label: 'Cost Reduction', value: '40%', icon: TrendingUp },
	{ label: 'Compliance Rate', value: '99%', icon: Shield },
	{ label: 'Waste Reduction', value: '35%', icon: Leaf },
	{ label: 'Time Saved', value: '25%', icon: Clock },
];

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	useEffect(() => {
		if (!isInView) return;

		const duration = 2000;
		const steps = 60;
		const increment = end / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, [isInView, end]);

	return (
		<span ref={ref} className='tabular-nums'>
			{count}
			{suffix}
		</span>
	);
}

export default function HygieneSolutions() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

	// Pre-generate droplet positions to avoid hydration mismatch
	const droplets = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		left: (i * 37 + 13) % 100, // Pseudo-random but consistent
		top: (i * 47 + 27) % 100,
		duration: 3 + ((i * 17) % 20) / 10,
		delay: ((i * 23) % 20) / 10,
	}));

	return (
		<div ref={containerRef} className='relative bg-white'>
			{/* Hero Section with Animated Background */}
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-900 to-teal-950'>
				{/* Animated Water Droplets Background */}
				<div className='absolute inset-0 overflow-hidden'>
					{droplets.map((droplet) => (
						<motion.div
							key={droplet.id}
							className='absolute w-2 h-2 bg-cyan-400/20 rounded-full'
							style={{
								left: `${droplet.left}%`,
								top: `${droplet.top}%`,
							}}
							animate={{
								y: [0, -30, 0],
								scale: [1, 1.2, 1],
								opacity: [0.2, 0.5, 0.2],
							}}
							transition={{
								duration: droplet.duration,
								repeat: Infinity,
								delay: droplet.delay,
							}}
						/>
					))}
				</div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/50 to-cyan-950/80'></div>

				<motion.div
					style={{ y: heroY, opacity: heroOpacity }}
					className='container mx-auto section-padding relative z-10 text-center'
				>
					{/* Floating Icon */}
					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 20,
							delay: 0.2,
						}}
						className='inline-block mb-8'
					>
						<div className='relative'>
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									rotate: [0, 5, -5, 0],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30'
							>
								<Droplets className='w-10 h-10 sm:w-12 sm:h-12 text-white' strokeWidth={2} />
							</motion.div>
							{/* Ripple Effect */}
							<motion.div
								className='absolute inset-0 bg-cyan-400 rounded-2xl'
								animate={{
									scale: [1, 1.5, 1.5],
									opacity: [0.5, 0, 0],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeOut',
								}}
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='max-w-4xl mx-auto'
					>
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
							<span className='block'>Hygiene Solutions</span>
							<span className='block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent'>
								Built for Scale
							</span>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className='text-xl sm:text-2xl text-cyan-100 mb-10 leading-relaxed'
						>
							System-led hygiene protocols that ensure consistency, compliance,
							and measurable outcomes across all your locations.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className='flex flex-col sm:flex-row gap-4 justify-center'
						>
							<Link
								href='/contact?type=hygiene-audit'
								className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-full overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105'
							>
								<span className='relative z-10'>Request Hygiene Audit</span>
								<ArrowRight className='w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
							</Link>

							<Link
								href='#ecosystem'
								className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400 transition-all duration-300'
							>
								<span>Learn More</span>
								<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
							</Link>
					</motion.div>
				</motion.div>
			</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2'
				>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className='w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2'
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='w-1 h-2 bg-white rounded-full'
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Ecosystem Section with Cards */}
			<section className='relative section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-white'>
				<div className='container mx-auto relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							The Hygiene{' '}
							<span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>
								Ecosystem
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							Comprehensive solutions covering every aspect of facility hygiene
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
						{ecosystemItems.map((item, idx) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-50px' }}
									transition={{ duration: 0.6, delay: idx * 0.1 }}
									whileHover={{ y: -8, scale: 1.02 }}
									className='group relative bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl p-8 border border-neutral-200 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300'
								>
									{/* Gradient Glow on Hover */}
									<div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300' />

									<div className='relative z-10'>
										<div className='w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
											<Icon className='w-7 h-7 text-white' strokeWidth={2} />
										</div>

										<h3 className='text-xl font-bold text-neutral-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300'>
											{item.title}
										</h3>

										<p className='text-neutral-600 leading-relaxed'>{item.description}</p>

										{/* Bottom Accent */}
										<motion.div
											className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl origin-left'
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
										/>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Process Flow Section */}
			<section className='relative section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-50 via-white to-cyan-50/30'>
				{/* Background Pattern */}
				<div className='absolute inset-0 opacity-[0.02]'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `radial-gradient(circle at 2px 2px, #06b6d4 1px, transparent 0)`,
							backgroundSize: '40px 40px',
						}}
					/>
				</div>

				<div className='container mx-auto relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							How We Work
						</h2>
						<p className='text-2xl text-neutral-600 max-w-3xl mx-auto'>
							Right Chemical, Right Dose, Right Process
						</p>
					</motion.div>

					<div className='max-w-5xl mx-auto space-y-8'>
						{processSteps.map((step, idx) => {
							const Icon = step.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: '-50px' }}
									transition={{ duration: 0.8, delay: idx * 0.2 }}
									className='group relative'
								>
									<div className='relative bg-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-200 hover:border-transparent hover:shadow-2xl transition-all duration-500'>
										{/* Gradient Border on Hover */}
										<div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

										<div className='flex flex-col sm:flex-row gap-6 items-start'>
											{/* Number & Icon */}
											<div className='flex-shrink-0'>
												<div className='relative'>
													<div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
														<Icon className='w-10 h-10 text-white' strokeWidth={2} />
													</div>
													<div className='absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-neutral-900 border-2 border-neutral-200'>
														{step.number}
													</div>
												</div>
											</div>

											{/* Content */}
											<div className='flex-1'>
												<h3 className='text-2xl sm:text-3xl font-bold text-neutral-900 mb-3'>
													{step.title}
												</h3>
												<p className='text-lg text-neutral-600 leading-relaxed'>
													{step.description}
												</p>
											</div>

											{/* Arrow Indicator */}
											<motion.div
												className='hidden sm:flex items-center justify-center'
												animate={{ x: [0, 10, 0] }}
												transition={{ duration: 2, repeat: Infinity }}
											>
												<ArrowRight className={`w-8 h-8 text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`} />
											</motion.div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='relative section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden'>
				{/* Animated Background */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
							backgroundSize: '50px 50px',
						}}
					/>
				</div>

				<div className='container mx-auto relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6'>
							Business Value Delivered
						</h2>
						<p className='text-xl text-neutral-300 max-w-3xl mx-auto'>
							Measurable impact across all key operational metrics
						</p>
					</motion.div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{businessValues.map((item, idx) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true, margin: '-50px' }}
									transition={{ duration: 0.6, delay: idx * 0.1 }}
									whileHover={{ y: -8, scale: 1.05 }}
									className='relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group'
								>
									<div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300' />

									<div className='relative z-10 text-center'>
										<div className='w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
											<Icon className='w-7 h-7 text-white' strokeWidth={2} />
										</div>

										<div className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'>
											<AnimatedCounter
												end={parseInt(item.value)}
												suffix={item.value.includes('%') ? '%' : ''}
											/>
										</div>

										<div className='text-lg text-neutral-300 font-medium'>{item.label}</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='relative section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50'>
				<div className='container mx-auto relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='max-w-4xl mx-auto'
					>
						<div className='relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-cyan-200/50 shadow-2xl overflow-hidden'>
							{/* Gradient Glow */}
							<div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 opacity-20 blur-2xl' />

							<div className='relative z-10 text-center'>
								{/* Icon */}
								<motion.div
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
									className='inline-block mb-6'
								>
									<div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30'>
										<Sparkles className='w-8 h-8 sm:w-10 sm:h-10 text-white' strokeWidth={2} />
									</div>
								</motion.div>

								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6'>
									Ready to Standardize Your{' '}
									<span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>
										Hygiene Operations?
									</span>
								</h2>

								<p className='text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed'>
									Start with a comprehensive hygiene audit to understand your current state and
									identify optimization opportunities.
								</p>

								<div className='flex flex-col sm:flex-row gap-4 justify-center'>
									<Link
										href='/contact?type=hygiene-audit'
										className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-full overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105'
									>
										<span className='relative z-10'>Request a Hygiene Audit</span>
										<ArrowRight className='w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
										<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
									</Link>

									<Link
										href='/contact?type=hygiene-experts'
										className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900/5 backdrop-blur-sm text-neutral-900 font-semibold text-lg rounded-full border-2 border-neutral-300 hover:bg-neutral-900/10 hover:border-cyan-500 transition-all duration-300'
									>
										<span>Talk to Hygiene Experts</span>
										<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
