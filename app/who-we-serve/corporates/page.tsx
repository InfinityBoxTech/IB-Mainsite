import type { Metadata } from 'next';
import SectorHero from '@/components/who-we-serve/SectorHero';
import BentoGrid from '@/components/who-we-serve/BentoGrid';
import BentoCard from '@/components/who-we-serve/BentoCard';
import Button from '@/components/ui/Button';
import { 
	Building2, 
	Users2, 
	FileCheck, 
	Leaf, 
	TrendingUp, 
	ArrowRight,
	ShieldCheck,
    Zap
} from 'lucide-react';

export const metadata: Metadata = {
	title: 'Corporate Offices & IT Parks | InfinityBox',
	description:
		'Audit-ready compliance systems, measurable sustainability impact, and cost optimization for corporate facilities and IT parks.',
};

export default function Corporates() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			<SectorHero
				title='Corporate Offices & IT Parks'
				subtitle='Corporates'
				description='Enterprise-grade solutions for large-scale facilities, ensuring employee health, sustainability reporting, and operational efficiency.'
				gradient='from-slate-900 via-neutral-900 to-slate-900'
			/>

			{/* Dashboard Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<BentoGrid>
						{/* Core Challenge - Large Card */}
						<BentoCard
							colSpan={2}
							rowSpan={2}
							title='The Coordination Challenge'
							subtitle='Problem'
							icon={<Building2 size={24} />}
							variant='default'
							className='bg-white'
						>
							<div className='flex flex-col gap-6 mt-4'>
								<p className='text-lg leading-relaxed text-neutral-600'>
									Managing large-scale corporate campuses involves juggling multiple vendors, ensuring consistent hygiene across thousands of square feet, and meeting rigorous ESG goals—all while keeping costs optimized.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-emerald-600 font-bold mb-1'>Multi-Tenant</div>
										<div className='text-xs text-neutral-500'>Complex Coordination</div>
									</div>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-emerald-600 font-bold mb-1'>ESG Goals</div>
										<div className='text-xs text-neutral-500'>Strict Reporting</div>
									</div>
								</div>
							</div>
						</BentoCard>

						{/* Metric 1 */}
						<BentoCard
							variant='stat'
							title='40%'
							subtitle='Impact'
							icon={<TrendingUp size={24} />}
							delay={1}
						>
							Average reduction in operational overhead through vendor consolidation.
						</BentoCard>

						{/* Metric 2 */}
						<BentoCard
							variant='stat'
							title='100%'
							subtitle='Compliance'
							icon={<FileCheck size={24} />}
							delay={2}
						>
							Audit-ready documentation for health, safety, and sustainability audits.
						</BentoCard>

						{/* Solution 1: Hygiene */}
						<BentoCard
							title='Standardized Hygiene'
							subtitle='Solution'
							icon={<ShieldCheck size={24} />}
							delay={3}
						>
							Uniform cleaning protocols and chemical dispensing systems across all floors and buildings, ensuring a consistently safe environment for employees.
						</BentoCard>

						{/* Solution 2: Connect */}
						<BentoCard
							title='Manpower Optimization'
							subtitle='Solution'
							icon={<Users2 size={24} />}
							delay={4}
						>
							deployment of trained, uniformed staff managed via SOPs. We handle the training, roster planning, and supervision so you don't have to.
						</BentoCard>

						<BentoCard
							colSpan={4}
							variant='visual'
							delay={5}
							className='bg-white shadow-[0_20px_50px_rgba(16,185,129,0.15)] ring-1 ring-emerald-100'
						>
							<div className='flex flex-col md:flex-row items-center justify-between h-full p-8 gap-8'>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='p-2 bg-emerald-50 rounded-lg text-emerald-600'>
											<Leaf size={20} />
										</div>
										<span className='font-bold uppercase tracking-wider text-xs text-emerald-700'>Sustainability</span>
									</div>
									<h3 className='text-3xl font-bold mb-4 text-neutral-900 tracking-tight'>Zero-Waste Packaging</h3>
									<p className='text-neutral-500 max-w-md leading-relaxed'>
										Replace single-use plastics in your cafeterias with our compostable and recyclable packaging solutions, directly contributing to your Net Zero goals.
									</p>
								</div>
								<div className='w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-inner'>
									<span className='text-4xl filter drop-shadow-sm'>🌱</span>
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
						<div className='absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl' />
						
						<div className='relative z-10 max-w-3xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
								Upgrade Your Facility Management
							</h2>
							<p className='text-lg text-neutral-400 mb-10'>
								Join leading IT parks and corporate campuses in standardizing excellence with InfinityBox.
							</p>
							<div className='flex justify-center'>
								<Button href='/contact?type=corporate' size='lg' className='bg-emerald-600 hover:bg-emerald-500 border-none text-white px-10 py-4 text-xl shadow-lg shadow-emerald-900/50'>
									Get a Site Audit
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}





