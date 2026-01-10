'use client';

import { motion } from 'framer-motion';
import { Service, accentColors, services } from './types';

interface ServiceCardProps {
	service: Service;
	index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
	const colors =
		accentColors[service.accentColor as keyof typeof accentColors];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
			className='relative group'
		>
			<div className='bg-white relative rounded-2xl md:rounded-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_-10px_40px_-10px_rgba(16,185,129,0.15)] transition-shadow duration-500'>
				<div className='px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14'>
					<div className='flex flex-col gap-4 sm:gap-5 md:gap-6'>
						{/* Icon and Accent Bar */}
						<div className='flex items-center gap-4'>
							<div className='text-4xl sm:text-5xl md:text-6xl'>
								{service.icon}
							</div>
							<div
								className={`h-2 w-16 sm:w-20 md:w-24 ${colors.bar} rounded-full`}
							/>
						</div>

						{/* Title */}
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.1] tracking-tight'>
							{service.title}
						</h2>

						{/* Description */}
						<p className='text-base sm:text-lg md:text-xl text-neutral-600 leading-[1.6] font-normal'>
							{service.description}
						</p>
					</div>
				</div>
			</div>

			{/* Divider */}
			{index < services.length - 1 && (
				<div className='h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 relative z-0' />
			)}
		</motion.div>
	);
}
