import type { Metadata } from 'next';
import KineticHero from '@/components/about-us/KineticHero'; // Reusing for consistency, or can create a variant
import CycleDiagram from '@/components/about-us/CycleDiagram';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
	title: 'Our Philosophy | InfinityBox',
	description: 'Clean That Comes Full Circle. Interactive journey through our circular operational model.',
};

export default function Philosophy() {
	return (
		<main className='bg-neutral-50'>
            {/* Custom Kinetic Header for Philosophy */}
			<section className="relative h-[70vh] flex items-center justify-center bg-neutral-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
                <div className="relative z-10 text-center px-4">
                    <p className="text-emerald-400 font-medium tracking-[0.2em] uppercase mb-6">Our Philosophy</p>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter loading-tight">
                        FULL CIRCLE<br/>OPERATIONS
                    </h1>
                </div>
            </section>

            {/* The Cycle Interaction */}
			<CycleDiagram />

            {/* Conclusion text */}
            <section className="py-32 bg-white text-center">
                 <div className="container mx-auto px-4 max-w-3xl">
                     <p className="text-2xl md:text-4xl font-light text-neutral-900 leading-tight mb-12">
                         "We don't just clear the waste.<br/>
                         <span className="font-bold text-emerald-600">We design it out of existence.</span>"
                     </p>
                     <Button href="/contact" size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full px-10 py-4">
                         Start Your Cycle
                     </Button>
                 </div>
            </section>
		</main>
	);
}
