import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import EcosystemSection from '@/components/sections/ecosystem';
import WhoWeServeSection from '@/components/sections/WhoWeServeSection';
import MetricsStrip from '@/components/sections/MetricsStrip';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
	title: 'Home',
	description:
		'InfinityBox delivers an integrated ecosystem across sustainable hygiene solutions, eco-friendly packaging, commercial kitchens, and workforce enablement across India.',
	openGraph: {
		title: 'InfinityBox | Hygiene Made Sustainable',
		description:
			'Integrated ecosystem for sustainable hygiene, packaging, kitchens, and workforce solutions.',
	},
};

const metrics = [
	{
		value: '30%',
		label: 'Water Reduction',
		description: 'Average impact',
	},
	{
		value: '25%',
		label: 'Electricity Reduction',
		description: 'Energy efficiency',
	},
	{
		value: '40%',
		label: 'Single Use Waste Reduction',
		description: 'Sustainability impact',
	},
];

export default function Home() {
	return (
		<>
			<Hero
				headline='Hygiene Made Sustainable. Operations Made Simple.'
				subhead='One accountable partner across hygiene, kitchen service ware and equipment, and manpower—built for scale, compliance, and measurable sustainability impact.'
				primaryCTA={{ text: 'Talk to a Hygiene Operations Expert', href: '/contact' }}
				secondaryCTA={{ text: 'See How Enterprises Manage Hygiene at Scale', href: '/insights/case-studies' }}
			/>

			<PhilosophySection />

			{/* Section Divider */}
			<div className='h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent' />

			<EcosystemSection />

			<WhoWeServeSection />

			{/* Section 4 - Stats Section - Redesigned */}
			<MetricsStrip metrics={metrics} />

			<CaseStudiesSection />

			<CTASection
				headline='Looking for a reliable operations partner?'
				description='Get in touch to discuss how InfinityBox can transform your operations infrastructure.'
				primaryCTA={{ text: 'Talk to InfinityBox', href: '/contact' }}
				secondaryCTA={{
					text: 'Request a Site Assessment',
					href: '/contact?type=assessment',
				}}
			/>
		</>
	);
}
