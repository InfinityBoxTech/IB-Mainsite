import type { Metadata } from 'next';
import LeadershipReveal from '@/components/about-us/LeadershipReveal';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
	title: 'Leadership | InfinityBox',
	description: 'Visionaries & Executors. The team driving India’s infrastructure.',
};

export default function Leadership() {
	return (
		<main className='bg-white pt-20'>
             <div className="container mx-auto px-4 ">
                <h1 className="text-6xl text-center md:text-9xl font-black tracking-tighter text-neutral-900 leading-[0.8]">
                    THE TEAM
                </h1>
             </div>

             <LeadershipReveal />
            
             <section className="py-20 text-center">
                 <p className="text-neutral-500 mb-8">Join the ranks.</p>
                 <Button href="/about-us/careers" variant="outline" size="lg" className="rounded-full px-10">
                     View Careers
                 </Button>
             </section>
		</main>
	);
}

