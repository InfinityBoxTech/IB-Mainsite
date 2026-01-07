import type { Metadata } from 'next';
import MarqueeHero from '@/components/about-us/MarqueeHero';
import MagneticJobList from '@/components/about-us/MagneticJobList';

export const metadata: Metadata = {
	title: 'Careers | InfinityBox',
	description: 'Join the movement. Build the infrastructure of tomorrow.',
};

export default function Careers() {
	return (
		<main className='bg-white'>
            <MarqueeHero />
            
            <section className="py-20 bg-emerald-50 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <p className="text-2xl md:text-3xl font-medium text-emerald-900 leading-relaxed">
                        "We don't hire people to fill seats. We hire people to <span className="bg-emerald-200 px-1">build systems</span> that change how India operates."
                    </p>
                </div>
            </section>

            <MagneticJobList />
		</main>
	);
}

