'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
	headline: string;
	description?: string;
	primaryCTA: { text: string; href: string };
	secondaryCTA?: { text: string; href: string };
	variant?: 'default' | 'dark';
}

export default function CTASection({
	headline,
	description,
	primaryCTA,
	secondaryCTA,
	variant = 'default',
}: CTASectionProps) {
	const isDark = variant === 'dark';

	return (
		<section
			className={`relative section-padding py-16 md:py-24 overflow-hidden ${
				isDark
					? 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900'
					: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
			}`}
		>
			{/* Animated Background Elements */}
			<div className='absolute inset-0 overflow-hidden'>
				{/* Grid Pattern */}
				<div
					className={`absolute inset-0 ${
						isDark ? 'opacity-5' : 'opacity-[0.03]'
					}`}
					style={{
						backgroundImage: `linear-gradient(${
							isDark ? '#059669' : '#047857'
						} 1px, transparent 1px), linear-gradient(90deg, ${
							isDark ? '#059669' : '#047857'
						} 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				/>

				{/* Floating Gradient Orbs */}
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${
						isDark ? 'bg-emerald-500/20' : 'bg-emerald-400/30'
					}`}
				/>
				<motion.div
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 4,
					}}
					className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${
						isDark ? 'bg-teal-500/20' : 'bg-teal-400/30'
					}`}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<div className='max-w-5xl mx-auto'>
					{/* Main Content Card */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className={`relative rounded-3xl md:rounded-[3rem] overflow-hidden ${
							isDark
								? 'bg-white/5 backdrop-blur-xl border border-white/10'
								: 'bg-white/80 backdrop-blur-xl border border-emerald-200/50'
						} shadow-2xl`}
					>
						{/* Gradient Glow */}
						<div className='absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-2xl' />

						<div className='relative p-8 sm:p-12 md:p-16 lg:p-20'>
							{/* Decorative Icon */}
							<motion.div
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.8,
									delay: 0.2,
									type: 'spring',
									stiffness: 200,
								}}
								className='flex justify-center mb-6 sm:mb-8'
							>
								<div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 rotate-12'>
									<Sparkles
										className={`w-8 h-8 sm:w-10 sm:h-10 ${
											isDark ? 'text-white' : 'text-white'
										}`}
										strokeWidth={2}
									/>
								</div>
							</motion.div>

							{/* Headline */}
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 leading-tight ${
									isDark ? 'text-white' : 'text-neutral-900'
								}`}
							>
								{headline}
							</motion.h2>

							{/* Description */}
							{description && (
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className={`text-lg sm:text-xl md:text-2xl text-center mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed ${
										isDark ? 'text-neutral-300' : 'text-neutral-600'
									}`}
								>
									{description}
								</motion.p>
							)}

							{/* CTAs */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.5 }}
								className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'
							>
								<Link
									href={primaryCTA.href}
									className='group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg rounded-full overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105'
								>
									<span className='relative z-10'>{primaryCTA.text}</span>
									<ArrowRight className='w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />

									{/* Shine Effect */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
								</Link>

								{secondaryCTA && (
									<Link
										href={secondaryCTA.href}
										className={`group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 font-semibold text-base sm:text-lg rounded-full border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap ${
											isDark
												? 'bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/40'
												: 'bg-neutral-900/5 backdrop-blur-sm text-neutral-900 border-neutral-300 hover:bg-neutral-900/10 hover:border-neutral-400'
										}`}
									>
										<span>{secondaryCTA.text}</span>
										<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
									</Link>
								)}
							</motion.div>

							{/* Trust Indicators */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className='mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12'
							>
								<div className='flex items-center gap-2 sm:gap-3'>
									<div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20'>
										<TrendingUp
											className='w-5 h-5 sm:w-6 sm:h-6 text-white'
											strokeWidth={2.5}
										/>
									</div>
									<div>
										<div
											className={`text-sm sm:text-base font-bold ${
												isDark ? 'text-white' : 'text-neutral-900'
											}`}
										>
											100+ Facilities
										</div>
										<div
											className={`text-xs ${
												isDark ? 'text-neutral-400' : 'text-neutral-600'
											}`}
										>
											Active deployments
										</div>
									</div>
								</div>

								<div className='flex items-center gap-2 sm:gap-3'>
									<div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20'>
										<CheckCircle2
											className='w-5 h-5 sm:w-6 sm:h-6 text-white'
											strokeWidth={2.5}
										/>
									</div>
									<div>
										<div
											className={`text-sm sm:text-base font-bold ${
												isDark ? 'text-white' : 'text-neutral-900'
											}`}
										>
											100% Compliance
										</div>
										<div
											className={`text-xs ${
												isDark ? 'text-neutral-400' : 'text-neutral-600'
											}`}
										>
											Audit-ready operations
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
