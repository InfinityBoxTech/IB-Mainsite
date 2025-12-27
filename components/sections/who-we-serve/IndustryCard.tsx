import Link from 'next/link';
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
		<div className='relative group'>
			<Link href={industry.href} className='block'>
				<div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-stretch'>
					<IndustryInfo industry={industry} colors={colors} />
					<ChallengesCard challenges={industry.challenges} colors={colors} />
					<ValueDelivered
						valueDelivered={industry.valueDelivered}
						colors={colors}
					/>
				</div>
			</Link>

			{/* Divider */}
			{index < industries.length - 1 && (
				<div className='mt-12 sm:mt-16 md:mt-20 lg:mt-24  h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent' />
			)}
		</div>
	);
}
