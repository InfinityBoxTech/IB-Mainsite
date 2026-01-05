import type { Metadata } from 'next';
import SectorHero from '@/components/who-we-serve/SectorHero';
import BentoGrid from '@/components/who-we-serve/BentoGrid';
import BentoCard from '@/components/who-we-serve/BentoCard';
import Button from '@/components/ui/Button';
import { 
	UtensilsCrossed, 
	Coffee, 
	Sparkles, 
	ChefHat, 
	Recycle,
	Gauge,
    Star
} from 'lucide-react';

export const metadata: Metadata = {
	title: 'Hospitality & Food Services | InfinityBox',
	description:
		'Standardized hygiene protocols, reduced operational downtime, and enhanced guest safety for hospitality and food service operations.',
};

export default function Hospitality() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			<SectorHero
				title='Hospitality & Food Services'
				subtitle='Hospitality'
				description='Integrated solutions for hotels, restaurants, and QSRs—ensuring 5-star guest safety, operational efficiency, and sustainability.'
				gradient='from-orange-900 via-neutral-900 to-amber-900'
			/>

			{/* Dashboard Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<BentoGrid>
						{/* Core Challenge - Large Card */}
						<BentoCard
							colSpan={2}
							rowSpan={2}
							title='The Standardization Challenge'
							subtitle='Challenge'
							icon={<UtensilsCrossed size={24} />}
							variant='default'
							className='bg-white'
						>
							<div className='flex flex-col gap-6 mt-4'>
								<p className='text-lg leading-relaxed text-neutral-600'>
									For multi-location chains, the biggest hurdle is replicating the "Perfect Guest Experience" everywhere. Inconsistent hygiene or packaging quality can tarnish a brand instantly.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-orange-600 font-bold mb-1'>Brand Risk</div>
										<div className='text-xs text-neutral-500'>One Mistake Costs</div>
									</div>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-orange-600 font-bold mb-1'>Speed</div>
										<div className='text-xs text-neutral-500'>High Turnover</div>
									</div>
								</div>
							</div>
						</BentoCard>

						{/* Metric 1 */}
						<BentoCard
							variant='stat'
							title='5-Star'
							subtitle='Standard'
							icon={<Star size={24} />}
							delay={1}
						>
							Consistent execution of hygiene and service standards across all locations.
						</BentoCard>

						{/* Metric 2 */}
						<BentoCard
							variant='stat'
							title='< 2h'
							subtitle='Response'
							icon={<Gauge size={24} />}
							delay={2}
						>
							Rapid response maintenance for kitchen equipment to minimize downtime.
						</BentoCard>

						{/* Solution 1: Kitchens */}
						<BentoCard
							title='Kitchen Intelligence'
							subtitle='Solution'
							icon={<ChefHat size={24} />}
							delay={3}
						>
							Lifecycle management of commercial kitchens—from layout optimization for workflow speed to preventive maintenance of critical ovens and HVAC.
						</BentoCard>

						{/* Solution 2: Packaging */}
						<BentoCard
							title='Brand Packaging'
							subtitle='Solution'
							icon={<Coffee size={24} />}
							delay={4}
						>
							Sustainable, high-quality packaging that survives delivery and enhances your brand's unboxing experience.
						</BentoCard>

						<BentoCard
							colSpan={4}
							variant='visual'
							delay={5}
							className='bg-white shadow-[0_20px_50px_rgba(249,115,22,0.15)] ring-1 ring-orange-100'
						>
							<div className='flex flex-col md:flex-row items-center justify-between h-full p-8 gap-8'>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='p-2 bg-orange-50 rounded-lg text-orange-600'>
											<Sparkles size={20} />
										</div>
										<span className='font-bold uppercase tracking-wider text-xs text-orange-700'>Aesthetics</span>
									</div>
									<h3 className='text-3xl font-bold mb-4 text-neutral-900 tracking-tight'>Invisible Hygiene</h3>
									<p className='text-neutral-500 max-w-md leading-relaxed'>
										Our housekeeping and hygiene protocols are designed to be invisible yet effective, ensuring customers notice nothing but the shine.
									</p>
								</div>
								<div className='w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center border border-orange-100 shadow-inner'>
									<span className='text-4xl filter drop-shadow-sm'>🥂</span>
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
						<div className='absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl' />
						
						<div className='relative z-10 max-w-3xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
								Elevate Your Guest Experience
							</h2>
							<p className='text-lg text-neutral-400 mb-10'>
								Connect with our hospitality specialists to standardize excellence across your chain.
							</p>
							<div className='flex justify-center'>
								<Button href='/contact?type=hospitality' size='lg' className='bg-orange-600 hover:bg-orange-500 border-none text-white px-10 py-4 text-xl shadow-lg shadow-orange-900/50'>
									Talk to Hospitality Specialist
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}





