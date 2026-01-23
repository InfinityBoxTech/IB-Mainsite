import type { Metadata } from 'next';
import { CareersHero, JobListings } from '@/components/careers';

export const metadata: Metadata = {
	title: 'Careers | InfinityBox',
	description:
		'Join the movement. Build the infrastructure of tomorrow. Explore open positions at InfinityBox.',
};

export default function Careers() {
	return (
		<main className='bg-white'>
			<CareersHero />

			{/* Quote section */}
			<section className='section-padding py-16 sm:py-20 bg-white'>
				<div className='container mx-auto'>
					<div className='max-w-4xl mx-auto text-center'>
						<blockquote className='text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 leading-relaxed'>
							&ldquo;We don&apos;t hire people to fill seats. We hire people to{' '}
							<span className='relative inline-block'>
								<span className='relative z-10'>build systems</span>
								<span className='absolute bottom-1 left-0 right-0 h-3 bg-emerald-200/60 z-0' />
							</span>{' '}
							that change how India operates.&rdquo;
						</blockquote>
					</div>
				</div>
			</section>

			<JobListings />
		</main>
	);
}

