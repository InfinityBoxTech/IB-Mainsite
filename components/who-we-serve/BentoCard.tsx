'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
	variant?: 'default' | 'stat' | 'visual' | 'solution';
	colSpan?: 1 | 2 | 3 | 4;
	rowSpan?: 1 | 2;
	title?: string;
	subtitle?: string;
	children?: ReactNode;
	icon?: ReactNode;
	className?: string;
	delay?: number;
}

export default function BentoCard({
	variant = 'default',
	colSpan = 1,
	rowSpan = 1,
	title,
	subtitle,
	children,
	icon,
	className = '',
	delay = 0,
}: BentoCardProps) {
	// Grid span classes
	const colSpanClasses = {
		1: 'col-span-1',
		2: 'col-span-1 md:col-span-2',
		3: 'col-span-1 md:col-span-3',
		4: 'col-span-1 md:col-span-2 lg:col-span-4',
	};

	const rowSpanClasses = {
		1: 'row-span-1',
		2: 'row-span-1 md:row-span-2',
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: delay * 0.1 }}
			className={`${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} group relative overflow-hidden rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
		>
			{/* Hover Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

			{/* Card Content based on Variant */}
			<div className='relative z-10 h-full p-6 flex flex-col'>
				{/* Icon Header */}
				{icon && (
					<div className='mb-4 flex items-center gap-3'>
						<div className='p-2.5 rounded-xl bg-neutral-50 text-emerald-600 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300'>
							{icon}
						</div>
						{subtitle && (
							<span className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>
								{subtitle}
							</span>
						)}
					</div>
				)}

				{/* Stat Variant */}
				{variant === 'stat' && (
					<div className='mt-auto'>
						<div className='text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-300'>
							{title}
						</div>
						<div className='mt-2 text-sm text-neutral-500 font-medium'>{children}</div>
					</div>
				)}

				{/* Solution/Text Variant */}
				{(variant === 'default' || variant === 'solution') && (
					<>
						{title && (
							<h3 className='text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300'>
								{title}
							</h3>
						)}
						<div className='text-neutral-600 leading-relaxed text-sm md:text-base'>
							{children}
						</div>
					</>
				)}

				{/* Visual Variant (Image/Graphic placeholder) */}
				{variant === 'visual' && (
					<div className='h-full min-h-[160px] flex items-center justify-center relative'>
						{/* Abstract decoration */}
						<div className='absolute inset-0 bg-gradient-to-br from-neutral-100 to-white rounded-2xl opacity-50' />
						<div className='relative z-10'>{children}</div>
					</div>
				)}

				{/* Hover Bottom Line */}
				<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
			</div>
		</motion.div>
	);
}
