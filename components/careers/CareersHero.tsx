'use client';

import { motion } from 'framer-motion';

export default function CareersHero() {
	return (
		<section className='relative min-h-[70vh] sm:min-h-[80vh] bg-neutral-950 overflow-hidden flex items-center section-padding pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 md:pb-28'>
			{/* Animated gradient background */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-neutral-950 to-neutral-950' />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='absolute top-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-bl from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl'
				/>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 0.3 }}
					className='absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl'
				/>
			</div>

			{/* Grid pattern */}
			<div className='absolute inset-0 opacity-[0.03]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<div className='max-w-5xl mx-auto text-center'>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6 sm:mb-8'
					>
						<span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse' />
						<span className='text-emerald-400 text-sm font-medium'>
							We&apos;re Hiring
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 px-2 sm:px-0'
					>
						Build systems that{' '}
						<span className='relative inline-block'>
							<span className='relative z-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
								change
							</span>
						</span>{' '}
						how India operates
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2 sm:px-4 md:px-0'
					>
						Join a team that&apos;s reimagining hygiene infrastructure at scale.
						We&apos;re looking for exceptional people who want to build something
						meaningful.
					</motion.p>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16'
					>
						{[
							{ value: '50+', label: 'Team Members' },
							{ value: '5', label: 'Cities' },
							{ value: '100%', label: 'Growth YoY' },
						].map((stat, index) => (
							<div key={index} className='text-center'>
								<div className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1'>
									{stat.value}
								</div>
								<div className='text-neutral-500 text-xs sm:text-sm'>{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.6 }}
				className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2'
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
					className='w-6 h-10 border-2 border-neutral-700 rounded-full flex items-start justify-center p-2'
				>
					<div className='w-1 h-2 bg-neutral-500 rounded-full' />
				</motion.div>
			</motion.div>
		</section>
	);
}
