import type { Metadata } from 'next';
import SectorHero from '@/components/who-we-serve/SectorHero';
import BentoGrid from '@/components/who-we-serve/BentoGrid';
import BentoCard from '@/components/who-we-serve/BentoCard';
import Button from '@/components/ui/Button';
import { 
	HeartPulse, 
	Stethoscope, 
	ShieldPlus, 
	FileCheck, 
	Microscope,
	Activity,
    ClipboardCheck,
    Biohazard,
    ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
	title: 'Healthcare & Institutions | InfinityBox',
	description:
		'Enhanced patient safety, healthcare standards compliance, and reliable execution for healthcare facilities and institutions.',
};

export default function Healthcare() {
	return (
		<main className='min-h-screen bg-neutral-50'>
			<SectorHero
				title='Healthcare & Institutions'
				subtitle='Healthcare'
				description='Critical hygiene standards, infection control protocols, and audit-ready compliance for hospitals and clinics.'
				gradient='from-teal-900 via-neutral-900 to-emerald-900'
			/>

			{/* Dashboard Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<BentoGrid>
						{/* Core Challenge - Large Card */}
						<BentoCard
							colSpan={2}
							rowSpan={2}
							title='The Hygiene Standard'
							subtitle='Challenge'
							icon={<HeartPulse size={24} />}
							variant='default'
							className='bg-white'
						>
							<div className='flex flex-col gap-6 mt-4'>
								<p className='text-lg leading-relaxed text-neutral-600'>
									In healthcare, hygiene is life-saving. Hospitals require absolute sterilization, zero cross-contamination, and audit-ready compliance trails—24/7, 365 days a year.
								</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-teal-600 font-bold mb-1'>Sterile</div>
										<div className='text-xs text-neutral-500'>Non-Negotiable</div>
									</div>
									<div className='p-4 bg-neutral-50 rounded-2xl'>
										<div className='text-teal-600 font-bold mb-1'>Audit</div>
										<div className='text-xs text-neutral-500'>Always Ready</div>
									</div>
								</div>
							</div>
						</BentoCard>

						{/* Metric 1 */}
						<BentoCard
							variant='stat'
							title='0%'
							subtitle='Pathogens'
							icon={<Biohazard size={24} />}
							delay={1}
						>
							Zero tolerance for cross-contamination in critical patient care areas.
						</BentoCard>

						{/* Metric 2 */}
						<BentoCard
							variant='stat'
							title='24/7'
							subtitle='Response'
							icon={<Stethoscope size={24} />}
							delay={2}
						>
							Rapid response teams for bio-hazard cleanup and emergency maintenance.
						</BentoCard>

						{/* Solution 1: Hygiene */}
						<BentoCard
							title='Clinical Hygiene'
							subtitle='Solution'
							icon={<ShieldCheck size={24} />}
							delay={3}
						>
							Hospital-grade disinfection protocols, specialized chemicals, and trained staff for infectious disease control.
						</BentoCard>

						{/* Solution 2: Packaging */}
						<BentoCard
							title='Safe Food Service'
							subtitle='Solution'
							icon={<Activity size={24} />}
							delay={4}
						>
							Hygienic, sealed packaging solutions for patient meals that prevent contamination during transport.
						</BentoCard>

						<BentoCard
							colSpan={4}
							variant='visual'
							delay={5}
							className='bg-white shadow-[0_20px_50px_rgba(20,184,166,0.15)] ring-1 ring-teal-100'
						>
							<div className='flex flex-col md:flex-row items-center justify-between h-full p-8 gap-8'>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='p-2 bg-teal-50 rounded-lg text-teal-600'>
											<ShieldCheck size={20} />
										</div>
										<span className='font-bold uppercase tracking-wider text-xs text-teal-700'>Trust</span>
									</div>
									<h3 className='text-3xl font-bold mb-4 text-neutral-900 tracking-tight'>Patient Confidence</h3>
									<p className='text-neutral-500 max-w-md leading-relaxed'>
										When patients see visible, professional hygiene standards, their trust in your care increases. We help you build that trust.
									</p>
								</div>
								<div className='w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 shadow-inner'>
									<span className='text-4xl filter drop-shadow-sm'>🏥</span>
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
						<div className='absolute -top-24 -right-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl' />
						
						<div className='relative z-10 max-w-3xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
								Enhance Patient Safety
							</h2>
							<p className='text-lg text-neutral-400 mb-10'>
								Connect with our healthcare compliance specialists.
							</p>
							<div className='flex justify-center'>
								<Button href='/contact?type=healthcare' size='lg' className='bg-teal-600 hover:bg-teal-500 border-none text-white px-10 py-4 text-xl shadow-lg shadow-teal-900/50'>
									Talk to Healthcare Specialist
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}






