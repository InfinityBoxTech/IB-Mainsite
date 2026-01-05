import type { Metadata } from 'next';
import KineticHero from '@/components/about-us/KineticHero';
import StickyScrollNarrative from '@/components/about-us/StickyScrollNarrative';
import HorizontalGallery from '@/components/about-us/HorizontalGallery';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
	title: 'About Us | InfinityBox',
	description:
		'We are the hidden infrastructure. InfinityBox delivers integrated operations solutions across hygiene, packaging, and kitchens.',
};

export default function AboutUs() {
	return (
		<main className='bg-neutral-50'>
			<KineticHero />
			
			<div className="pt-24 pb-4 bg-white">
				<div className="container mx-auto px-4 text-center max-w-2xl">
					<p className="text-lg text-neutral-500 uppercase tracking-widest mb-4">The Story</p>
					<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
						From chaos to control.<br/>
						From fragmentation to flow.
					</h2>
				</div>
			</div>

			<StickyScrollNarrative />

			<HorizontalGallery />

			{/* Final CTA */}
			<section className='section-padding py-32 bg-neutral-950 text-white text-center'>
				<div className='container mx-auto px-4'>
					<h2 className='text-5xl md:text-8xl font-black tracking-tighter mb-10'>
						READY TO<br /> TRANSFORM?
					</h2>
					<a
						href='/contact'
						className='inline-block bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-300 border-none px-12 py-6 text-xl font-bold rounded-full'
					>
						Let's Talk
					</a>
				</div>
			</section>
		</main>
	);
}
