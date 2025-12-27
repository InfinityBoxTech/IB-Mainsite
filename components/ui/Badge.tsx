import React from 'react';

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
		sm: 'gap-2 px-4 py-2 text-xs',
		md: 'gap-2.5 sm:gap-3 md:gap-4 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg',
		lg: 'gap-3 sm:gap-4 md:gap-5 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
	};

	const dotSizes = {
		sm: 'w-1.5 h-1.5',
		md: 'w-2 h-2 sm:w-2.5 sm:h-2.5',
		lg: 'w-2.5 h-2.5 sm:w-3 sm:h-3',
	};

	return (
		<div className='relative inline-flex'>
			{/* Shimmer Effect */}
			<span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none rounded-full overflow-hidden'></span>

			{/* Badge Content */}
			<div className='flex items-center gap-2 bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-full border border-neutral-700 shadow-xl hover:scale-105 transition-all duration-300 relative'>
				<div className='flex items-center gap-1'>
					<div className='w-1 h-1'></div>
					<div className={`${dotSizes[size]} bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50`}></div>
				</div>
				<div className='flex items-center gap-1'>
					<div className='font-bold uppercase tracking-wider text-white'>
						{leftText} · {rightText}
					</div>
					<div className='w-1 h-1'></div>
				</div>
			</div>
		</div>
	);
}
