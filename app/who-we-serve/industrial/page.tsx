import type { Metadata } from 'next';
import SectorHero from '@/components/who-we-serve/SectorHero';
import BentoGrid from '@/components/who-we-serve/BentoGrid';
import BentoCard from '@/components/who-we-serve/BentoCard';
import Button from '@/components/ui/Button';
import { 
	Factory, 
	HardHat, 
	ShieldAlert, 
	Settings, 
	Fuel,
	BarChart3,
    Tractor,
    ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
	title: 'Industrial & Manufacturing | InfinityBox',
	description:
		'Specialized industrial solutions, safety-first protocols, and reduced downtime for manufacturing and industrial facilities.',
};

export default function Industrial() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			<SectorHero
				title='Industrial & Manufacturing'
				subtitle='Industrial'
				description='Rugged solutions for heavy-duty environments. We ensure safety compliance, operational uptime, and workforce hygiene.'
				gradient='from-slate-900 via-zinc-900 to-slate-800'
			/>

			{/* Dashboard Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<BentoGrid>
						{/* Core Challenge - Large Card */}
						<BentoCard
							colSpan={2}
							rowSpan={2}
							title='Heavy-Duty Complexity'
							subtitle='Challenge'
							icon={<Factory size={24} />}
							variant='default'
							className='bg-white'
						>
							<div className='flex flex-col gap-6 mt-4'>
								<p className='text-lg leading-relaxed text-neutral-600'>
									Industrial facilities deal with grime, grease, and hazardous materials on a scale that standard cleaning cannot touch. Balancing deep cleaning with non-stop production shifts is the daily battle.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-slate-600 font-bold mb-1'>Hazards</div>
										<div className='text-xs text-neutral-500'>Strict Safety Protocols</div>
									</div>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-slate-600 font-bold mb-1'>Uptime</div>
										<div className='text-xs text-neutral-500'>Zero Downtime allowed</div>
									</div>
								</div>
							</div>
						</BentoCard>

						{/* Metric 1 */}
						<BentoCard
							variant='stat'
							title='ISO'
							subtitle='Compliance'
							icon={<ShieldAlert size={24} />}
							delay={1}
						>
							Full adherence to ISO 45001 and local factory safety acts.
						</BentoCard>

						{/* Metric 2 */}
						<BentoCard
							variant='stat'
							title='24/7'
							subtitle='Coverage'
							icon={<Settings size={24} />}
							delay={2}
						>
							Shift-aligned cleaning schedules that never interrupt your production lines.
						</BentoCard>

						{/* Solution 1: Industrial Cleaning */}
						<BentoCard
							title='Mechanized Hygiene'
							subtitle='Solution'
							icon={<Tractor size={24} />}
							delay={3}
						>
							Deployment of heavy-duty scrubbers, sweepers, and steam cleaners to tackle stubborn industrial residues.
						</BentoCard>

						{/* Solution 2: Training */}
						<BentoCard
							title='Safety-First Staff'
							subtitle='Solution'
							icon={<HardHat size={24} />}
							delay={4}
						>
							Workforce trained specifically for hazardous environments, equipped with proper PPE and emergency response knowledge.
						</BentoCard>

						<BentoCard
							colSpan={4}
							variant='visual'
							delay={5}
							className='bg-white shadow-[0_20px_50px_rgba(100,116,139,0.15)] ring-1 ring-slate-100'
						>
							<div className='flex flex-col md:flex-row items-center justify-between h-full p-8 gap-8'>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='p-2 bg-slate-50 rounded-lg text-slate-600'>
											<Fuel size={20} />
										</div>
										<span className='font-bold uppercase tracking-wider text-xs text-slate-700'>Efficiency</span>
									</div>
									<h3 className='text-3xl font-bold mb-4 text-neutral-900 tracking-tight'>Lean Facilities</h3>
									<p className='text-neutral-500 max-w-md leading-relaxed'>
										A clean factory is a safe factory. Our specialized industrial services reduce accident risks and improve overall plant efficiency.
									</p>
								</div>
								<div className='w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-inner'>
									<span className='text-4xl filter drop-shadow-sm'>🏭</span>
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
						<div className='absolute -top-24 -right-24 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-500/20 rounded-full blur-3xl' />
						
						<div className='relative z-10 max-w-3xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
								Secure Your Operations
							</h2>
							<p className='text-lg text-neutral-400 mb-10'>
								Connect with our industrial specialists to audit your facility.
							</p>
							<div className='flex justify-center'>
								<Button href='/contact?type=industrial' size='lg' className='bg-slate-600 hover:bg-slate-500 border-none text-white px-10 py-4 text-xl shadow-lg shadow-slate-900/50'>
									Get a Facility Audit
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}






