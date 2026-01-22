'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ChefHat, Flame, Thermometer, Wrench, CheckCircle2, ArrowRight, ArrowDown, Gauge } from 'lucide-react';

// Animated Counter Component
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

export default function CommercialKitchenSolutions() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

	// Generate random steam/heat particles
	const heatParticles = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		left: `${Math.random() * 100}%`,
		delay: Math.random() * 3,
		duration: 4 + Math.random() * 3,
		size: 15 + Math.random() * 25,
	}));

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section with Animated Heat Particles */}
			<section
				ref={heroRef}
				className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-950 via-red-950 to-amber-950'
			>
				{/* Animated Heat/Steam Particles */}
				<div className='absolute inset-0 overflow-hidden'>
					{heatParticles.map((particle) => (
						<motion.div
							key={particle.id}
							className='absolute text-orange-400/20'
							style={{
								left: particle.left,
								bottom: '-50px',
								width: particle.size,
								height: particle.size,
							}}
							animate={{
								y: [-50, -(typeof window !== 'undefined' ? window.innerHeight : 1000) - 50],
								x: [0, Math.random() * 40 - 20],
								opacity: [0, 0.6, 0],
								scale: [0.5, 1, 0.5],
							}}
							transition={{
								duration: particle.duration,
								repeat: Infinity,
								delay: particle.delay,
								ease: 'easeOut',
							}}
						>
							<Flame className='w-full h-full' />
						</motion.div>
					))}
				</div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/50 to-orange-950/80'></div>

				{/* Floating Icon with Pulse Effect */}
				<motion.div
					className='absolute top-1/4 right-1/4 hidden lg:block'
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<div className='relative'>
						{/* Pulse Rings */}
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								className='absolute inset-0 rounded-full border-2 border-orange-400'
								initial={{ scale: 1, opacity: 0.6 }}
								animate={{
									scale: [1, 2.5, 3.5],
									opacity: [0.6, 0.3, 0],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: i * 1,
									ease: 'easeOut',
								}}
								style={{
									width: 100,
									height: 100,
									left: '50%',
									top: '50%',
									marginLeft: -50,
									marginTop: -50,
								}}
							/>
						))}
						<motion.div
							className='relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-2xl'
							animate={{
								boxShadow: [
									'0 0 20px rgba(251, 146, 60, 0.5)',
									'0 0 40px rgba(251, 146, 60, 0.8)',
									'0 0 20px rgba(251, 146, 60, 0.5)',
								]
							}}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						>
							<ChefHat className='w-12 h-12 text-white' />
						</motion.div>
					</div>
				</motion.div>

				{/* Hero Content */}
				<motion.div
					style={{ y: heroY, opacity: heroOpacity }}
					className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 mb-6'
					>
						<Thermometer className='w-4 h-4 text-orange-400' />
						<span className='text-sm font-medium text-orange-400'>Professional Grade</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight'
					>
						Commercial Kitchen
						<br />
						<span className='bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent'>
							Solutions
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-xl sm:text-2xl md:text-3xl text-orange-100 max-w-4xl mx-auto mb-12 leading-relaxed'
					>
						Lifecycle support for commercial kitchens — from design and setup to equipment supply and optimisation. We help enterprises plan efficient layouts, select the right kitchen equipment, serviceware, and smallware, and streamline workflows for safety, speed, and cost efficiency.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Link
							href='/contact'
							className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105'
						>
							<span>Get Started</span>
							<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
						</Link>
						<Link
							href='#ecosystem'
							className='group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300'
						>
							<span>Learn More</span>
							<ArrowDown className='w-5 h-5 transition-transform duration-300 group-hover:translate-y-1' />
						</Link>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2'
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						className='w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2'
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
							className='w-1.5 h-1.5 bg-white rounded-full'
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Lifecycle Support Section */}
			<section id='ecosystem' className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							Lifecycle{' '}
							<span className='bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent'>
								Support
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							Comprehensive kitchen infrastructure solutions from design to ongoing maintenance
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
						{[
							{
								icon: <Gauge className='w-8 h-8' />,
								title: 'Layout Optimization',
								description:
									'Strategic kitchen design that maximizes workflow efficiency, minimizes movement, and optimizes space utilization.',
							},
							{
								icon: <ChefHat className='w-8 h-8' />,
								title: 'Equipment Selection',
								description:
									'Expert procurement guidance for commercial-grade equipment that balances performance, durability, and energy efficiency.',
							},
							{
								icon: <Wrench className='w-8 h-8' />,
								title: 'Installation & Commissioning',
								description:
									'Professional installation with proper testing, calibration, and handover to ensure peak performance from day one.',
							},
							{
								icon: <Thermometer className='w-8 h-8' />,
								title: 'Preventive Maintenance',
								description:
									'Scheduled maintenance programs that prevent breakdowns, extend equipment life, and maintain food safety standards.',
							},
							{
								icon: <Flame className='w-8 h-8' />,
								title: 'Utility Management',
								description:
									'Energy and water efficiency optimization through smart systems, monitoring, and continuous improvement.',
							},
							{
								icon: <CheckCircle2 className='w-8 h-8' />,
								title: 'Workflow Efficiency',
								description:
									'Process optimization and staff training to reduce bottlenecks, improve throughput, and enhance quality.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -8, scale: 1.02 }}
								className='group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-200 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10'
							>
								{/* Gradient Background on Hover */}
								<div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10'>
									<div className='mb-4 text-orange-600 inline-flex p-3 rounded-xl bg-orange-50 group-hover:bg-white transition-colors duration-300'>
										{item.icon}
									</div>
									<h3 className='text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-orange-700 transition-colors duration-300'>
										{item.title}
									</h3>
									<p className='text-neutral-600 leading-relaxed'>{item.description}</p>
								</div>

								{/* Bottom Accent Line */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 origin-left'
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Flow Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							How We{' '}
							<span className='bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent'>
								Work
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							A proven methodology for delivering world-class commercial kitchens
						</p>
					</motion.div>

					<div className='max-w-5xl mx-auto space-y-8'>
						{[
							{
								step: '01',
								title: 'Site Assessment',
								description:
									'Comprehensive evaluation of current setup, workflow patterns, capacity requirements, and infrastructure to identify optimization opportunities.',
							},
							{
								step: '02',
								title: 'Design Optimization',
								description:
									'Custom layout and workflow redesign using industry best practices to maximize efficiency, reduce bottlenecks, and improve safety.',
							},
							{
								step: '03',
								title: 'Installation & Commissioning',
								description:
									'Professional installation with proper testing, staff training, and handover documentation to ensure optimal performance.',
							},
							{
								step: '04',
								title: 'Ongoing Maintenance',
								description:
									'Preventive maintenance programs with scheduled inspections, cleaning, calibration, and repairs to maintain peak performance.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.8, delay: idx * 0.2 }}
								className='group gap-6'
							>
								<div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
									{/* Step Number */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										className='flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/30 border-4 border-white group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-300'
									>
										{item.step}
									</motion.div>

									{/* Content */}
									<div className='flex-1 bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 group-hover:border-orange-200 transition-all duration-300 group-hover:shadow-xl'>
										<h3 className='text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3 group-hover:text-orange-700 transition-colors duration-300'>
											{item.title}
										</h3>
										<p className='text-lg text-neutral-600 leading-relaxed'>{item.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-orange-950 to-red-950 relative overflow-hidden'>
				{/* Grid Pattern */}
				<div
					className='absolute inset-0 opacity-10'
					style={{
						backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				></div>

				<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6'>
							Performance{' '}
							<span className='bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent'>
								Metrics
							</span>
						</h2>
						<p className='text-xl text-orange-100 max-w-3xl mx-auto'>
							Real results from our commercial kitchen implementations
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{ value: 45, suffix: '%', label: 'Efficiency Increase' },
							{ value: 99, suffix: '%', label: 'Uptime Achievement' },
							{ value: 35, suffix: '%', label: 'Energy Savings' },
							{ value: 250, suffix: '+', label: 'Kitchens Optimized' },
						].map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -10, scale: 1.05 }}
								className='group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20'
							>
								{/* Glow Effect */}
								<div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10 text-center'>
									<div className='text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent mb-4'>
										<AnimatedCounter end={stat.value} suffix={stat.suffix} />
									</div>
									<div className='text-lg sm:text-xl text-orange-100 font-medium'>{stat.label}</div>
								</div>

								{/* Animated Border */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400'
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-white to-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='relative overflow-hidden bg-gradient-to-br from-neutral-900 via-orange-900 to-red-900 rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20'
					>
						{/* Gradient Overlay */}
						<div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 opacity-50'></div>

						{/* Grid Pattern */}
						<div
							className='absolute inset-0 opacity-5'
							style={{
								backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
								backgroundSize: '50px 50px',
							}}
						></div>

						<div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8'>
							<div className='flex-1 text-center md:text-left'>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4'
								>
									Ready to{' '}
									<span className='bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent'>
										Optimize
									</span>
									?
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className='text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl'
								>
									Transform your kitchen operations with professional design and ongoing support
								</motion.p>
							</div>

							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<Link
									href='/contact'
									className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105'
								>
									<span>Get Assessment</span>
									<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

