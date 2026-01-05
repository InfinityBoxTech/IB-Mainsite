'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

interface PillarCardProps {
	title: string;
	description: string;
	icon?: ReactNode;
	href: string;
	index?: number;
}

export default function PillarCard({
	title,
	description,
	icon,
	href,
	index = 0,
}: PillarCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// Sinking parallax effect - cards move down as you scroll (reduced distance)
	const y = useTransform(scrollYProgress, [0, 1], [0, 20]);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0, 1, 1, 0.8],
	);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0.9, 1, 1, 0.98],
	);

	// Hover variants for orchestrating child animations
	const cardHoverVariants = {
		rest: { 
			y: 0, 
			scale: 1,
			transition: { duration: 0.3 }
		},
		hover: { 
			y: -4, 
			scale: 1.01,
			transition: { type: 'spring', stiffness: 400, damping: 25 }
		}
	} as const;

	const overlayVariants = {
		rest: { opacity: 0 },
		hover: { opacity: 1, transition: { duration: 0.5 } }
	} as const;

	const arrowVariants = {
		rest: { opacity: 0, x: -10 },
		hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }
	} as const;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{
				duration: 0.6,
				delay: index * 0.2,
				ease: 'easeOut',
			}}
			className='h-full'
		>
			<Link href={href} className='block h-full'>
				<motion.div
					className='relative h-full flex flex-col bg-white rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 overflow-hidden transition-all duration-300'
					initial="rest"
					whileHover="hover"
					variants={cardHoverVariants}
				>
					{/* Animated Gradient Background on Hover */}
					<motion.div
						className='absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
						variants={overlayVariants}
					/>

					{/* Glow Effect */}
					<motion.div
						className='absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl sm:rounded-2xl blur-xl -z-10'
						variants={{
							rest: { opacity: 0 },
							hover: { opacity: 0.2, transition: { duration: 0.5 } }
						}}
					/>

					{/* Animated Gradient Ring on Hover */}
					<motion.div
						className='absolute top-0 right-0 w-24 h-24'
						variants={overlayVariants}
					>
						<motion.div
							className='absolute inset-0 rounded-full border-2 border-emerald-400'
							animate={{
								scale: [1, 1.3, 1],
								opacity: [0.6, 0.2, 0.6],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: index * 0.2,
							}}
						/>
						<motion.div
							className='absolute inset-0 rounded-full border-2 border-teal-400'
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.4, 0.1, 0.4],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: index * 0.3 + 0.3,
							}}
						/>
					</motion.div>

					{/* Content */}
					<div className='relative z-10 flex flex-col h-full'>
						{/* Icon with Animation */}
						{icon && (
							<motion.div className='mb-4 sm:mb-5 md:mb-6 lg:mb-6 text-emerald-600 relative z-0'>
								<motion.div
									className='relative inline-block'
									animate={{
										y: [0, -3, 0],
									}}
									whileHover={{
										scale: 1.1,
										y: 0,
									}}
									transition={{
										y: {
											duration: 3,
											repeat: Infinity,
											ease: 'easeInOut',
											delay: index * 0.5,
										},
										scale: {
											duration: 0.3,
											ease: 'easeOut',
										},
									}}
									style={{ willChange: 'transform' }}
								>
									{icon}
								</motion.div>
							</motion.div>
						)}

						{/* Title */}
						<motion.h3
							className='text-xl sm:text-2xl font-semibold text-neutral-900 mb-3 sm:mb-4 leading-tight transition-colors duration-300 relative z-10'
							variants={{
								rest: { color: '#171717' }, // neutral-900
								hover: { color: '#047857' }  // emerald-700
							}}
						>
							{title}
						</motion.h3>

						{/* Description */}
						<p className='text-neutral-600 leading-relaxed flex-grow mb-4'>
							{description}
						</p>

						{/* Animated Arrow CTA */}
						<motion.div
							className='flex items-center gap-2 text-sm font-medium text-emerald-600 mt-auto py-2 sm:py-3'
							variants={arrowVariants}
						>
							<span>Learn more</span>
							<motion.svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								animate={{ x: [0, 4, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<path
									d='M6 12L10 8L6 4'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</motion.svg>
						</motion.div>

						{/* Bottom Accent Line */}
						<motion.div
							className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 origin-left'
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
						/>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
}
