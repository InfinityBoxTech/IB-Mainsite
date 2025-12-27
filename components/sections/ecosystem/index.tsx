'use client';

import { Droplets, Package, ChefHat, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import PillarCard from './PillarCard';
import BottomCTA from './BottomCTA';

const pillars = [
	{
		title: 'Hygiene Solutions',
		description:
			'Right chemical, right dose, right process. Controlled dispensing, audit-ready compliance, and training-backed execution.',
		Icon: Droplets,
		href: '/what-we-do/hygiene-solutions',
		tags: ['Controlled Dispensing', 'Audit-Ready', 'Training-Backed'],
		image: '/images/hygiene-solutions.jpg',
		imageAlt:
			'Hygiene Solutions - Controlled dispensing systems and compliance',
	},
	{
		title: 'Packaging Solutions',
		description:
			'Compostable and recyclable alternatives at institutional scale. Compliance-focused with durability for operational needs.',
		Icon: Package,
		href: '/what-we-do/packaging-solutions',
		tags: ['Compostable', 'Compliance-Focused', 'Institutional Scale'],
		image: '/images/packaging-solutions.jpg',
		imageAlt: 'Packaging Solutions - Sustainable packaging at scale',
	},
	{
		title: 'Commercial Kitchen Solutions',
		description:
			'Lifecycle support from setup to maintenance. Layout optimization, workflow efficiency, and utility management.',
		Icon: ChefHat,
		href: '/what-we-do/commercial-kitchen-solutions',
		tags: ['Lifecycle Support', 'Workflow Optimization', 'Utility Efficiency'],
		image: '/images/kitchen-solutions.jpg',
		imageAlt: 'Commercial Kitchen Solutions - Optimized kitchen layouts',
	},
	{
		title: 'Manpower Solutions',
		description:
			'Trained, compliant workforce with SOPs, supervision, and planning. Reliable execution across multi-site operations.',
		Icon: Users,
		href: '/what-we-do/manpower-solutions',
		tags: ['Trained Workforce', 'SOP-Driven', 'Multi-Site Ready'],
		image: '/images/manpower-solutions.jpg',
		imageAlt: 'Manpower Solutions - Trained workforce execution',
	},
];

export default function EcosystemSection() {
	return (
		<section className='relative bg-white section-padding'>
			<div className='container mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32 3xl:gap-36'>
				{/* Section 1: Header */}
				{/* <SectionHeader /> */}

				{/* Section 2: Pillars Grid */}
				{/* <div className='max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 3xl:gap-32'>
					{pillars.map((pillar, idx) => (
						<PillarCard key={idx} {...pillar} index={idx} />
					))}
				</div> */}

				{/* Section 3: Bottom CTA */}
				<BottomCTA />
			</div>
		</section>
	);
}
