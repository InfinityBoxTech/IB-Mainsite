import type { Metadata } from 'next';
import KineticHero from '@/components/about-us/KineticHero';
import OriginNarrative from '@/components/about-us/OriginNarrative';
import LongTermVision from '@/components/about-us/LongTermVision';
import HorizontalGallery from '@/components/about-us/HorizontalGallery';

export const metadata: Metadata = {
	title: 'About Us | InfinityBox',
	description:
		'A pan-India operations company building long-term cafeteria infrastructure for enterprise clients. Led by operators, engineers, and sustainability practitioners.',
};

export default function AboutUs() {
	return (
		<main className='bg-neutral-50'>
			{/* Section 1: Hero */}
			<KineticHero />

			{/* Section 2: Building Infrastructure (Origin Narrative) */}
			<div className='pt-16 sm:pt-20 md:pt-24 bg-white'>
				<div className='container mx-auto px-6 sm:px-8 md:px-12 text-center max-w-3xl mb-8 sm:mb-10 md:mb-12'>
					<p className='text-sm md:text-base text-neutral-500 uppercase tracking-[0.2em] mb-4 md:mb-6 font-semibold'>
						Origin & Philosophy
					</p>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight'>
						Building Infrastructure,
						<br />
						Not Just Services.
					</h2>
				</div>
				<OriginNarrative />
			</div>

			{/* Section 3: Built for Long Term */}
			<div className='py-16 sm:py-20 md:py-0 bg-white'>
				<LongTermVision />
			</div>

			{/* Section 4: Horizontal Gallery */}
			<div className='py-16 sm:py-20 md:py-24 bg-white'>
				<HorizontalGallery />
			</div>
		</main>
	);
}
