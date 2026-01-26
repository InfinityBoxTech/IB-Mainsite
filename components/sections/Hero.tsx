'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import Badge from '@/components/ui/Badge';

interface HeroProps {
	headline: string;
	subhead: string;
	primaryCTA?: { text: string; href: string };
	secondaryCTA?: { text: string; href: string };
}

export default function Hero({
	headline,
	subhead,
	primaryCTA = { text: 'Get in Touch', href: '/contact' },
	secondaryCTA = { text: 'Explore Solutions', href: '/what-we-do' },
}: HeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	});

	// Smoother scroll transform - less aggressive on mobile
	const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '10%', '20%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 1, 1, 0]);

	return (
		<section
			ref={containerRef}
			className='relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 section-padding pt-10 xl:pt-14 pb-24 sm:pb-28 md:pb-32 xl:pb-36'
		>
			{/* Background Video/Image Placeholder with Overlay */}
			<div className='absolute inset-0 z-0'>
				{/* PLACEHOLDER: Replace with <video autoPlay muted loop playsInline> or <Image> */}
				<div className='absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-950' />

				{/* Animated Mesh Gradient Overlay */}
				<div className='absolute inset-0 opacity-30'>
					<div className='absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob' />
					<div className='absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000' />
					<div className='absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000' />
				</div>

				{/* Dark Overlay for Text Contrast */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70' />

				{/* Grid Pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
							backgroundSize: '100px 100px',
						}}
					/>
				</div>
			</div>

			{/* Main Content Container */}
			<motion.div
				style={{ y, opacity }}
				className='container mx-auto relative z-10 py-20 sm:py-24 md:py-28 lg:py-16'
			>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
					{/* Left Column - Main Content */}
					<div className='lg:col-span-7 xl:col-span-8 text-center lg:text-left px-4 sm:px-6 md:px-0'>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className='mb-6 lg:mb-8 flex justify-center lg:justify-start'
						>
							<Badge
								showDot={true}
								leftText='Pan India'
								rightText='Hygiene and sustainability partner'
								separator='·'
								variant='dark'
								size='md'
							/>
						</motion.div>

						{/* Headline with Split Animation */}
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='text-[28px] sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-[1.15] tracking-tight px-2 sm:px-3 md:px-0'
						>
							<motion.span
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className='block text-white'
							>
								<span className='sm:whitespace-nowrap'>Hygiene Made </span>
								<span className='sm:whitespace-nowrap lg:block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
									Sustainable.
								</span>
							</motion.span>
							<motion.span
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								className='block text-white mt-2'
							>
								<span className='sm:whitespace-nowrap'>Operations Made </span>
								<span className='sm:whitespace-nowrap lg:block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
									Simple.
								</span>
							</motion.span>
						</motion.h1>

						{/* Subheading */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-neutral-300 mb-8 lg:mb-10 leading-relaxed max-w-3xl px-1 sm:px-2 md:px-0'
						>
							{subhead}
						</motion.p>

						{/* CTAs */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className='flex flex-col gap-4 mb-12 lg:mb-16 w-full lg:w-fit items-center lg:flex-row md:items-center lg:items-start'
						>
							<Link
								href={primaryCTA.href}
								className='group relative inline-flex whitespace-nowrap items-center justify-center md:gap-3 lg:gap-0  py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 w-full '
							>
								<span className='relative z-10'>{primaryCTA.text}</span>
								<ArrowRight className='w-5 h-5  relative z-10 transition-transform duration-300 group-hover:translate-x-1' />

								{/* Shine Effect */}
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
							</Link>

							<Link
								href={secondaryCTA.href}
								className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 font-semibold text-base sm:text-lg rounded-full border-2 border-emerald-500/30 hover:bg-emerald-50 hover:border-emerald-500  transition-all duration-300 shadow-lg w-full  whitespace-nowrap'
							>
								<span className='text-neutral-900 group-hover:text-emerald-700 transition-colors duration-300'>{secondaryCTA.text}</span>
								<Play className='w-5 h-5 text-emerald-600 transition-transform duration-300 group-hover:scale-110' />
							</Link>
						</motion.div>

						{/* Trust Indicators */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.9 }}
							className='flex flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start'
						>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
								<span className='text-sm text-neutral-400'>
									Trusted by 1000+ facilities
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<TrendingUp className='w-4 h-4 text-emerald-400' />
								<span className='text-sm text-neutral-400'>
									100% compliance rate
								</span>
							</div>
						</motion.div>
					</div>

					{/* Right Column - Glassmorphic Stats Card */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className='lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0'
					>
						<div className='relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl mb-4 sm:mb-0 lg:mb-72'>
							{/* Glow Effect */}
							<div className='absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-xl' />

							{/* Content */}
							<div className='relative z-10'>
								{/* Header */}
								<div className='flex items-center gap-3 mb-8'>
									<div className='w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center'>
										<Sparkles className='w-5 h-5 text-white' />
									</div>
									<div>
										<div className='text-xs font-bold text-emerald-400 uppercase tracking-wider'>
											Impact
										</div>
										<div className='text-sm text-neutral-300'>
											Real-time Metrics
										</div>
									</div>
								</div>

								{/* Stats Grid */}
								<div className='space-y-6 '>
									<div className='group'>
										<div className='flex items-baseline gap-2 mb-2'>
											<div className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
												5+
											</div>
											<div className='text-sm text-emerald-400 font-semibold'>
												Cities
											</div>
										</div>
										<div className='h-2 bg-white/10 rounded-full overflow-hidden'>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: '70%' }}
												transition={{ duration: 1.5, delay: 1.2 }}
												className='h-full bg-gradient-to-r from-emerald-500 to-teal-500'
											/>
										</div>
										<div className='text-xs text-neutral-400 mt-1'>
											Pan-India presence
										</div>
									</div>

									<div className='group'>
										<div className='flex items-baseline gap-2 mb-2'>
											<div className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
												100+
											</div>
											<div className='text-sm text-emerald-400 font-semibold'>
												Client Facilities
											</div>
										</div>
										<div className='h-2 bg-white/10 rounded-full overflow-hidden'>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: '85%' }}
												transition={{ duration: 1.5, delay: 1.4 }}
												className='h-full bg-gradient-to-r from-emerald-500 to-teal-500'
											/>
										</div>
										<div className='text-xs text-neutral-400 mt-1'>
											Active deployments
										</div>
									</div>

									<div className='group'>
										<div className='flex items-baseline gap-2 mb-2'>
											<div className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
												6
											</div>
											<div className='text-sm text-emerald-400 font-semibold'>
												Self Owned Facilities
											</div>
										</div>
										<div className='h-2 bg-white/10 rounded-full overflow-hidden'>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: '60%' }}
												transition={{ duration: 1.5, delay: 1.6 }}
												className='h-full bg-gradient-to-r from-emerald-500 to-teal-500'
											/>
										</div>
										<div className='text-xs text-neutral-400 mt-1'>
											Centralized operations
										</div>
									</div>

									<div className='group'>
										<div className='flex items-baseline gap-2 mb-2'>
											<div className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
												100%
											</div>
											<div className='text-sm text-emerald-400 font-semibold'>
												Compliant
											</div>
										</div>
										<div className='h-2 bg-white/10 rounded-full overflow-hidden'>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: '100%' }}
												transition={{ duration: 1.5, delay: 1.8 }}
												className='h-full bg-gradient-to-r from-emerald-500 to-teal-500'
											/>
										</div>
										<div className='text-xs text-neutral-400 mt-1'>
											Audit-ready operations
										</div>
									</div>
								</div>

								{/* Bottom Accent */}
								<div className='mt-8 pt-6 border-t border-white/10'>
									<div className='flex items-center justify-between text-xs text-neutral-400'>
										<span>Updated in real-time</span>
										<div className='flex items-center gap-1'>
											<div className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
											<span>Live</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 0.6 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
				>
					<span className='text-xs text-neutral-400 uppercase tracking-widest'>
						Scroll
					</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className='w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2'
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='w-1 h-2 bg-emerald-400 rounded-full'
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
