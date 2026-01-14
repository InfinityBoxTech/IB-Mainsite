import type { Metadata } from 'next';
import WhoWeServeSection from '@/components/sections/WhoWeServeSection';

export const metadata: Metadata = {
	title: 'Who We Serve | InfinityBox',
	description:
		'InfinityBox works with organisations that operate large, high-volume cafeterias where hygiene, compliance, and reliability are critical.',
};

export default function WhoWeServe() {
	return (
		<main className='bg-neutral-50'>
			{/* Introduction Section */}
			<section className='relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden'>
				{/* Background Pattern */}
				<div className='absolute inset-0 opacity-[0.03]'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
							backgroundSize: '40px 40px',
						}}
					/>
				</div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white' />

				<div className='container mx-auto px-6 sm:px-8 md:px-12 relative z-10'>
					<div className='max-w-4xl mx-auto text-center'>
						{/* Who We Serve Heading */}
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-8 sm:mb-10 md:mb-12'>
							Who We{' '}
							<span className='relative inline-block'>
								<span className='relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
									Serve
								</span>
								<span className='absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-cyan-400/40 rounded-full origin-center'></span>
							</span>
						</h1>

						{/* Description */}
						<p className='text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed'>
							InfinityBox works with organisations that operate large, high-volume cafeterias where hygiene, compliance, and reliability are critical. Our systems are designed to perform consistently across scale, peak demand, and regulatory scrutiny.
						</p>
					</div>
				</div>
			</section>

			{/* Who We Serve Section Component */}
			<WhoWeServeSection />
		</main>
	);
}
