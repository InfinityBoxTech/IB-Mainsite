'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { Package, Leaf, Recycle, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

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

export default function PackagingSolutions() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

	// Generate random leaf particles
	const leafParticles = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		left: `${Math.random() * 100}%`,
		top: `${Math.random() * 100}%`,
		delay: Math.random() * 5,
		duration: 8 + Math.random() * 4,
		size: 20 + Math.random() * 30,
	}));

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section with Animated Leaf Particles */}
			<section
				ref={heroRef}
				className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950'
			>
				{/* Animated Leaf Particles */}
				<div className='absolute inset-0 overflow-hidden'>
					{leafParticles.map((particle) => (
						<motion.div
							key={particle.id}
							className='absolute text-emerald-400/20'
							style={{
								left: particle.left,
								top: particle.top,
								width: particle.size,
								height: particle.size,
							}}
							animate={{
								y: [0, -30, 0],
								x: [0, Math.random() * 20 - 10, 0],
								rotate: [0, 360],
								opacity: [0.2, 0.6, 0.2],
							}}
							transition={{
								duration: particle.duration,
								repeat: Infinity,
								delay: particle.delay,
								ease: 'easeInOut',
							}}
						>
							<Leaf className='w-full h-full' />
						</motion.div>
					))}
				</div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/50 to-emerald-950/80'></div>

				{/* Floating Icon with Ripple Effect */}
				<motion.div
					className='absolute top-1/4 right-1/4 hidden lg:block'
					animate={{
						y: [0, -20, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<div className='relative'>
						{/* Ripple Rings */}
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								className='absolute inset-0 rounded-full border-2 border-green-400'
								initial={{ scale: 1, opacity: 0.6 }}
								animate={{
									scale: [1, 2, 3],
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
							className='relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl'
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						>
							<Package className='w-12 h-12 text-white' />
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
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 mb-6'
					>
						<Recycle className='w-4 h-4 text-green-400' />
						<span className='text-sm font-medium text-green-400'>Sustainable Future</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight'
					>
						Packaging
						<br />
						<span className='bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>
							Solutions
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-xl sm:text-2xl md:text-3xl text-green-100 max-w-4xl mx-auto mb-12 leading-relaxed'
					>
						Compostable and recyclable alternatives at institutional scale. Compliance-focused with
						durability for operational needs.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Link
							href='/contact'
							className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105'
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

			{/* Ecosystem Cards Section */}
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
							Sustainable{' '}
							<span className='bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent'>
								Packaging Portfolio
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							End-to-end packaging solutions that balance environmental responsibility with operational
							excellence
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
						{[
							{
								icon: <Leaf className='w-8 h-8' />,
								title: 'Compostable Food Service',
								description:
									'Industrial-grade compostable containers, plates, and cutlery that meet ASTM D6400 standards for commercial composting.',
							},
							{
								icon: <Recycle className='w-8 h-8' />,
								title: 'Recyclable Systems',
								description:
									'Single-stream recyclable packaging with clear labeling for easy sorting and maximum recovery rates.',
							},
							{
								icon: <Package className='w-8 h-8' />,
								title: 'Biodegradable Alternatives',
								description:
									'Plant-based materials that naturally decompose while maintaining durability during use and storage.',
							},
							{
								icon: <CheckCircle2 className='w-8 h-8' />,
								title: 'Reusable Integration',
								description:
									'Durable reusable container programs with tracking, cleaning, and rotation systems for institutional scale.',
							},
							{
								icon: <ArrowRight className='w-8 h-8' />,
								title: 'Waste Stream Optimization',
								description:
									'Complete waste management integration with composting, recycling, and minimal landfill diversion.',
							},
							{
								icon: <CheckCircle2 className='w-8 h-8' />,
								title: 'Compliance Documentation',
								description:
									'Full regulatory compliance support with certifications, testing reports, and audit-ready documentation.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -8, scale: 1.02 }}
								className='group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10'
							>
								{/* Gradient Background on Hover */}
								<div className='absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10'>
									<div className='mb-4 text-green-600 inline-flex p-3 rounded-xl bg-green-50 group-hover:bg-white transition-colors duration-300'>
										{item.icon}
									</div>
									<h3 className='text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-green-700 transition-colors duration-300'>
										{item.title}
									</h3>
									<p className='text-neutral-600 leading-relaxed'>{item.description}</p>
								</div>

								{/* Bottom Accent Line */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 origin-left'
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
							<span className='bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent'>
								Work
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							A systematic approach to implementing sustainable packaging across your operations
						</p>
					</motion.div>

					<div className='max-w-5xl mx-auto space-y-8'>
						{[
							{
								step: '01',
								title: 'Assessment & Analysis',
								description:
									'Comprehensive audit of current packaging usage, waste streams, and operational requirements to identify optimization opportunities.',
							},
							{
								step: '02',
								title: 'Solution Design',
								description:
									'Custom packaging portfolio design that balances sustainability goals, compliance requirements, and operational durability.',
							},
							{
								step: '03',
								title: 'Implementation',
								description:
									'Phased rollout with staff training, supplier coordination, and waste management system integration across all locations.',
							},
							{
								step: '04',
								title: 'Monitoring & Optimization',
								description:
									'Ongoing performance tracking, compliance reporting, and continuous improvement to maximize environmental and operational benefits.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.8, delay: idx * 0.2 }}
								className='group'
							>
								<div className='flex flex-col md:flex-row gap-6 items-start'>
									{/* Step Number */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										className='flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/30 border-4 border-white group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300'
									>
										{item.step}
									</motion.div>

									{/* Content */}
									<div className='flex-1 bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 group-hover:border-green-200 transition-all duration-300 group-hover:shadow-xl'>
										<h3 className='text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3 group-hover:text-green-700 transition-colors duration-300'>
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
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-green-950 to-emerald-950 relative overflow-hidden'>
				{/* Grid Pattern */}
				<div
					className='absolute inset-0 opacity-10'
					style={{
						backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
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
							Impact{' '}
							<span className='bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>
								By Numbers
							</span>
						</h2>
						<p className='text-xl text-green-100 max-w-3xl mx-auto'>
							Real results from our sustainable packaging implementations
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{ value: 85, suffix: '%', label: 'Waste Diversion Rate' },
							{ value: 100, suffix: '%', label: 'Compliance Achievement' },
							{ value: 40, suffix: '%', label: 'Cost Optimization' },
							{ value: 500, suffix: 'k+', label: 'Units Monthly' },
						].map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -10, scale: 1.05 }}
								className='group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20'
							>
								{/* Glow Effect */}
								<div className='absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10 text-center'>
									<div className='text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4'>
										<AnimatedCounter end={stat.value} suffix={stat.suffix} />
									</div>
									<div className='text-lg sm:text-xl text-green-100 font-medium'>{stat.label}</div>
								</div>

								{/* Animated Border */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'
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
						className='relative overflow-hidden bg-gradient-to-br from-neutral-900 via-green-900 to-emerald-900 rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20'
					>
						{/* Gradient Overlay */}
						<div className='absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-50'></div>

						{/* Grid Pattern */}
						<div
							className='absolute inset-0 opacity-5'
							style={{
								backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
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
									<span className='bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>
										Go Sustainable
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
									Transform your packaging operations with eco-friendly solutions that deliver results
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
									className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105'
								>
									<span>Explore Solutions</span>
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
