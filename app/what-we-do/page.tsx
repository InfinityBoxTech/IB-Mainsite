import type { Metadata } from 'next';
import ServiceScroll from '@/components/what-we-do/ServiceScroll';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
	title: 'What We Do | InfinityBox',
	description:
		'Four pillars, one resilient ecosystem. Hygiene, Packaging, Kitchens, and Manpower solutions built for scale and sustainability.',
};

export default function WhatWeDo() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			{/* Hero Section */}
			<section className='pt-32 pb-16 md:pt-40 md:pb-24 section-padding'>
				<div className='container mx-auto text-center max-w-4xl'>
					<h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-8'>
						Four Pillars. <br />
						<span className='bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent'>
							One Resilient Ecosystem.
						</span>
					</h1>
					<p className='text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed'>
						We integrate hygiene, packaging, kitchens, and manpower into a single, accountable loop—built for scale and compliance.
					</p>
				</div>
			</section>

			{/* Sticky Scroll Experience */}
			<ServiceScroll />

			{/* Bottom CTA */}
			<section className='py-24 bg-white border-t border-neutral-100 section-padding'>
				<div className='container mx-auto text-center max-w-3xl'>
					<h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mb-6'>
						Ready to Transform Your Operations?
					</h2>
					<p className='text-lg text-neutral-600 mb-10'>
						Talk to our experts about how InfinityBox can deliver integrated
						solutions for your multi-site organization.
					</p>
					<Button href='/contact' size='lg'>
						Start the Conversation
					</Button>
				</div>
			</section>
		</main>
	);
}





