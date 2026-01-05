'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Industry, accentColors, industries } from './types';
import IndustryInfo from './IndustryInfo';
import ChallengesCard from './ChallengesCard';
import ValueDelivered from './ValueDelivered';

interface IndustryCardProps {
	industry: Industry;
	index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
	const colors =
		accentColors[industry.accentColor as keyof typeof accentColors];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
			className='relative group'
		>
			<Link href={industry.href} className='block'>
				<div className='bg-white relative rounded-t-2xl md:rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_-10px_40px_-10px_rgba(16,185,129,0.15)] transition-shadow duration-500'>
					<div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-stretch py-8 sm:py-12 md:py-14 lg:py-16'>
						<IndustryInfo industry={industry} colors={colors} />
						<ChallengesCard challenges={industry.challenges} colors={colors} />
						<ValueDelivered
							valueDelivered={industry.valueDelivered}
							colors={colors}
						/>
					</div>
				</div>
			</Link>

			{/* Divider - Adjusted spacing for curtain effect */}
			{index < industries.length - 1 && (
				<div className='h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 relative z-0' />
			)}
		</motion.div>
	);
}
