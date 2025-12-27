'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BottomCTA() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='relative overflow-hidden'
		>
			{/* Background Gradient Blob */}
			<div className='absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] opacity-60'></div>

			{/* Animated Gradient Border */}
			<div className='absolute inset-0 rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-20 blur-xl animate-pulse'></div>

			{/* Content Container */}
			<div className='relative backdrop-blur-sm bg-white/40 border border-emerald-200/50 rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl'>
				<div className='px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-28 2xl:px-24 2xl:py-32 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14'>

					{/* Decorative Icon */}
					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						whileInView={{ scale: 1, rotate: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
						className='relative'
					>
						<div className='absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse'></div>
						<div className='relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg'>
							<Sparkles className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white' strokeWidth={2} />
						</div>
					</motion.div>

					{/* Main Heading with Highlight */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-neutral-900 leading-[1.15] tracking-[-0.02em] text-center max-w-4xl'
					>
						Ready to{' '}
						<span className='relative inline-block group'>
							<span className='relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-extrabold'>
								Integrate
							</span>
							{/* Animated Underline */}
							<motion.span
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
								className='absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 right-0 h-2 sm:h-3 md:h-4 lg:h-5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-30 rounded-full origin-left'
							></motion.span>
							{/* Hover Glow */}
							<span className='absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300'></span>
						</span>{' '}
						your operations?
					</motion.h2>

					{/* Subtext */}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-neutral-600 text-center max-w-2xl font-normal leading-relaxed'
					>
						Discover how our integrated solutions work together to transform your business
					</motion.p>

					{/* CTA Button */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<Link
							href='/what-we-do'
							className='group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 overflow-hidden'
						>
							{/* Button Background with Gradient */}
							<div className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full transition-transform duration-300 group-hover:scale-105'></div>

							{/* Button Shine Effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full'></div>

							{/* Button Content */}
							<span className='relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-14 xl:py-7 2xl:px-16 2xl:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-white flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
								Explore all solutions
								<ArrowRight
									className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 transition-transform duration-300 group-hover:translate-x-1'
									strokeWidth={2.5}
								/>
							</span>

							{/* Button Glow */}
							<div className='absolute -inset-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10'></div>
						</Link>
					</motion.div>

					{/* Decorative Elements */}
					<div className='absolute top-10 left-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl animate-pulse'></div>
					<div className='absolute bottom-10 right-10 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
				</div>
			</div>
		</motion.div>
	);
}
