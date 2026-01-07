import type { Metadata } from 'next';
import SectorHero from '@/components/who-we-serve/SectorHero';
import BentoGrid from '@/components/who-we-serve/BentoGrid';
import BentoCard from '@/components/who-we-serve/BentoCard';
import Button from '@/components/ui/Button';
import { 
	GraduationCap, 
	School, 
	ShieldCheck, 
	Leaf, 
	Utensils,
	Users,
    Wallet,
    Award,
    BookOpen,
    Recycle
} from 'lucide-react';

export const metadata: Metadata = {
	title: 'Education Campuses | InfinityBox',
	description:
		'Safe learning environments, cost-effective solutions, and sustainability integration for schools, colleges, and educational institutions.',
};

export default function Education() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			<SectorHero
				title='Education Campuses'
				subtitle='Education'
				description='Safe, sustainable, and cost-effective solutions for schools, colleges, and educational institutions.'
				gradient='from-blue-900 via-neutral-900 to-sky-900'
			/>

			{/* Dashboard Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<BentoGrid>
						{/* Core Challenge - Large Card */}
						<BentoCard
							colSpan={2}
							rowSpan={2}
							title='The Campus Safety Priority'
							subtitle='Challenge'
							icon={<School size={24} />}
							variant='default'
							className='bg-white'
						>
							<div className='flex flex-col gap-6 mt-4'>
								<p className='text-lg leading-relaxed text-neutral-600'>
									Schools and universities must balance tight budgets with non-negotiable standards for student health and safety. A single hygiene lapse can disrupt the entire academic calendar.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-blue-600 font-bold mb-1'>Health</div>
										<div className='text-xs text-neutral-500'>Zero Compromise</div>
									</div>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-blue-600 font-bold mb-1'>Budget</div>
										<div className='text-xs text-neutral-500'>Optimized Cost</div>
									</div>
								</div>
							</div>
						</BentoCard>

						{/* Metric 1 */}
						<BentoCard
							variant='stat'
							title='100%'
							subtitle='Safety'
							icon={<Award size={24} />}
							delay={1}
						>
							Compliance with student health & safety regulations across all facilities.
						</BentoCard>

						{/* Metric 2 */}
						<BentoCard
							variant='stat'
							title='30%'
							subtitle='Savings'
							icon={<BookOpen size={24} />}
							delay={2}
						>
							Reduction in food waste and operational costs through optimized systems.
						</BentoCard>

						{/* Solution 1: Kitchens */}
						<BentoCard
							title='Healthy Kitchens'
							subtitle='Solution'
							icon={<Utensils size={24} />}
							delay={3}
						>
							Hygienic, efficient kitchen layouts ensuring nutritious meals are prepared safely for thousands of students daily.
						</BentoCard>

						{/* Solution 2: Packaging */}
						<BentoCard
							title='Eco-Friendly Campus'
							subtitle='Solution'
							icon={<Recycle size={24} />}
							delay={4}
						>
							Sustainable packaging for cafeterias to reduce campus plastic footprint and teach sustainability by example.
						</BentoCard>

						<BentoCard
							colSpan={4}
							variant='visual'
							delay={5}
							className='bg-white shadow-[0_20px_50px_rgba(59,130,246,0.15)] ring-1 ring-blue-100'
						>
							<div className='flex flex-col md:flex-row items-center justify-between h-full p-8 gap-8'>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='p-2 bg-blue-50 rounded-lg text-blue-600'>
											<GraduationCap size={20} />
										</div>
										<span className='font-bold uppercase tracking-wider text-xs text-blue-700'>Future Ready</span>
									</div>
									<h3 className='text-3xl font-bold mb-4 text-neutral-900 tracking-tight'>Inspiring Next Gen</h3>
									<p className='text-neutral-500 max-w-md leading-relaxed'>
										A clean, sustainable campus isn't just an operational need—it's an educational tool that inspires students to value their environment.
									</p>
								</div>
								<div className='w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-inner'>
									<span className='text-4xl filter drop-shadow-sm'>🎓</span>
								</div>
							</div>
						</BentoCard>
					</BentoGrid>
				</div>
			</section>

			{/* Bottom CTA */}
			{/* Bottom CTA */}
			<section className='section-padding pt-10 xl:pt-14 pb-20 xl:pb-28 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='relative overflow-hidden rounded-[2.5rem] bg-neutral-900 p-8 md:p-16 text-center shadow-2xl'>
						{/* Background effects */}
						<div className='absolute inset-0 bg-[url("/grid-noise.png")] opacity-20' />
						<div className='absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl' />
						
						<div className='relative z-10 max-w-3xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
								Support Your Educational Mission
							</h2>
							<p className='text-lg text-neutral-400 mb-10'>
								Connect with our education sector specialists.
							</p>
							<div className='flex justify-center'>
								<Button href='/contact?type=education' size='lg' className='bg-blue-600 hover:bg-blue-500 border-none text-white px-10 py-4 text-xl shadow-lg shadow-blue-900/50'>
									Talk to Education Specialist
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}






