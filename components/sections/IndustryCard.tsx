'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface IndustryCardProps {
	title: string;
	challenges: string[];
	valueDelivered: string[];
	href: string;
	gradient?: string;
	icon?: string;
	index?: number;
}

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const hoverVariants = {
	rest: { y: 0, scale: 1 },
	hover: {
		y: -8,
		scale: 1.02,
		transition: {
			duration: 0.3,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

export default function IndustryCard({
	title,
	challenges,
	valueDelivered,
	href,
	gradient = 'from-emerald-500 via-teal-500 to-cyan-500',
	icon = '🏢',
	index = 0,
}: IndustryCardProps) {
	return (
		<Link href={href} className='block group h-full'>
			<motion.div
				variants={cardVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-50px' }}
				custom={index}
				whileHover='hover'
				variants={hoverVariants}
				className='relative h-full bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/60 shadow-sm hover:shadow-2xl overflow-hidden transition-shadow duration-500 flex flex-col'
			>
				{/* Animated Gradient Background */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
					className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}
				/>

				{/* Glow Effect on Hover */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileHover={{ opacity: 1, scale: 1 }}
					className={`absolute -inset-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 -z-10`}
				/>

				{/* Content */}
				<div className='relative flex flex-col h-full p-6 sm:p-8 md:p-10 gap-6 sm:gap-8'>
					{/* Header with Icon */}
					<div className='flex items-start justify-between gap-4'>
						<div className='flex-1'>
							<motion.h3
								whileHover={{ x: 2 }}
								transition={{ duration: 0.2 }}
								className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight mb-2 group-hover:text-emerald-700 transition-colors duration-300'
							>
								{title}
							</motion.h3>
						</div>

						{/* Animated Icon Badge */}
						<motion.div
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ duration: 0.3 }}
							className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
						>
							<span className='text-2xl sm:text-3xl md:text-4xl relative z-10'>
								{icon}
							</span>
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.6, 0.3],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl`}
							/>
						</motion.div>
					</div>

					{/* Challenges Section */}
					<div className='flex-1 space-y-3 sm:space-y-4'>
						<motion.div
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
							className='flex items-center gap-2 mb-3'
						>
							<AlertCircle className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0' strokeWidth={2.5} />
							<h4 className='text-xs sm:text-sm font-semibold text-neutral-700 uppercase tracking-wider'>
								Typical Challenges
							</h4>
						</motion.div>
						<ul className='space-y-2.5 sm:space-y-3'>
							{challenges.map((challenge, idx) => (
								<motion.li
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: index * 0.1 + 0.5 + idx * 0.1,
									}}
									className='flex items-start gap-3 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed'
								>
									<span className='flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-orange-400'></span>
									<span>{challenge}</span>
								</motion.li>
							))}
						</ul>
					</div>

					{/* Divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
						className='h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent'
					/>

					{/* Value Delivered Section */}
					<div className='space-y-3 sm:space-y-4'>
						<motion.div
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
							className='flex items-center gap-2 mb-3'
						>
							<CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0' strokeWidth={2.5} />
							<h4 className='text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider'>
								Value Delivered
							</h4>
						</motion.div>
						<ul className='space-y-2.5 sm:space-y-3'>
							{valueDelivered.map((value, idx) => (
								<motion.li
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: index * 0.1 + 0.9 + idx * 0.1,
									}}
									className='flex items-start gap-3 text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed'
								>
									<CheckCircle2 className='flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-emerald-500' strokeWidth={2.5} />
									<span className='font-medium'>{value}</span>
								</motion.li>
							))}
						</ul>
					</div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 + 1.1 }}
						className='flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-emerald-600 group-hover:text-emerald-700 pt-2'
					>
						<span>Learn more</span>
						<ArrowRight
							className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-2'
							strokeWidth={2.5}
						/>
					</motion.div>
				</div>

				{/* Animated Bottom Accent Line */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: index * 0.1 + 0.5, ease: [0.16, 1, 0.3, 1] }}
					className={`h-1 bg-gradient-to-r ${gradient} origin-left`}
				/>
			</motion.div>
		</Link>
	);
}
