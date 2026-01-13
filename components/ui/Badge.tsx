'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
	showDot?: boolean;
	leftText?: string;
	rightText?: string;
	separator?: string;
	variant?: 'dark' | 'light';
	size?: 'sm' | 'md' | 'lg';
}

export default function Badge({
	showDot = true,
	leftText,
	rightText,
	separator = '·',
	variant = 'dark',
	size = 'md',
}: BadgeProps) {
	const sizeClasses = {
		sm: 'px-4 py-2.5 text-xs gap-1',
		md: 'px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm gap-1.5',
		lg: 'px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-base gap-2',
	};

	const dotSizes = {
		sm: 'w-1.5 h-1.5',
		md: 'w-2 h-2 sm:w-2.5 sm:h-2.5',
		lg: 'w-2.5 h-2.5 sm:w-3 sm:h-3',
	};

	const dotGlowSizes = {
		sm: 'w-3 h-3',
		md: 'w-4 h-4 sm:w-5 sm:h-5',
		lg: 'w-5 h-5 sm:w-6 sm:h-6',
	};

	return (
		<div className='relative inline-flex flex-col items-center'>
			{/* Top Center Pulse Dot (Mobile Only) */}
			{showDot && (
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='relative mb-2 md:hidden flex items-center justify-center'
					style={{ width: '20px', height: '20px' }}
				>
					{/* Outer Glow Ring - Contained */}
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className='absolute inset-0 bg-emerald-400 rounded-full blur-[2px]'
					/>
					{/* Inner Pulse Dot */}
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							opacity: [1, 0.8, 1],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className={`relative ${dotSizes[size]} bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60`}
					/>
				</motion.div>
			)}

			{/* Badge Container with Premium Design */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className='relative group'
			>
				{/* Animated Gradient Border */}
				<div className='absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm' />
				<div className='absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300' />

				{/* Main Badge Content */}
				<div
					className={`relative flex flex-col sm:flex-row items-center ${sizeClasses[size]} bg-gradient-to-br from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl rounded-full border border-neutral-700/50 group-hover:border-emerald-500/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/10`}
				>
					{/* Shimmer Effect */}
					<div className='absolute inset-0 rounded-full overflow-hidden'>
						<motion.div
							animate={{
								x: ['-100%', '200%'],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatDelay: 0.1,
								ease: 'linear',
							}}
							className='absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent'
						/>
					</div>

					{/* Pulse Dot Inside Badge (Tablet/Desktop) */}
					{showDot && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='hidden md:flex relative items-center mr-2 flex-shrink-0'
						>
							{/* Outer Glow Ring */}
							<motion.div
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.4, 0.6, 0.4],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className={`absolute inset-0 ${dotGlowSizes[size]} bg-emerald-400 rounded-full blur-sm`}
								style={{ margin: '-50%' }}
							/>
							{/* Inner Pulse Dot */}
							<motion.div
								animate={{
									scale: [1, 1.1, 1],
									opacity: [1, 0.8, 1],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className={`relative ${dotSizes[size]} bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60`}
							/>
						</motion.div>
					)}

					{/* Text Content */}
					<div className='relative z-10 flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1.5'>
						<span className='font-bold uppercase tracking-wider text-white text-center sm:text-left leading-tight block sm:inline sm:whitespace-nowrap'>
							{leftText}
						</span>
						<span className='hidden sm:inline text-emerald-400/60 font-bold mx-0.5'>
							{separator}
						</span>
						<span className='font-bold uppercase tracking-wider text-white/90 text-center sm:text-left leading-tight block sm:inline'>
							{rightText}
						</span>
					</div>

					{/* Hover Glow Effect */}
					<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500' />
				</div>
			</motion.div>
		</div>
	);
}
