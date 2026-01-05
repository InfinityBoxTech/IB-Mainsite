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
		value: '50+',
		label: 'Cities',
		description: 'Pan-India presence',
	},
	{
		value: '1000+',
		label: 'Facilities',
		description: 'Active deployments',
	},
	{
		value: '99%',
		label: 'Compliance Rate',
		description: 'Audit-ready operations',
	},
	{
		value: '30%',
		label: 'Waste Reduction',
		description: 'Average impact',
	},
];

export default function Home() {
	return (
		<>
			<Hero
				headline='Hygiene Made Sustainable. Operations Made Simple.'
				subhead='One accountable partner across hygiene, packaging, kitchens, and manpower—built for scale, compliance, and measurable sustainability impact.'
				primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
				secondaryCTA={{ text: 'Explore Solutions', href: '/what-we-do' }}
			/>

			<EcosystemSection />

			{/* Section Divider */}
			<div className='h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent' />

			<WhoWeServeSection />

			{/* Section 4 - Stats Section - Redesigned */}
			<MetricsStrip metrics={metrics} />

			<CaseStudiesSection />

			<PhilosophySection />

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
