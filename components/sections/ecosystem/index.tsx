'use client';

import { Droplets, ChefHat, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import PillarCard from '../PillarCard';
import BottomCTA from './BottomCTA';

const pillars = [
	{
		title: 'Hygiene & Dishwashing Operations',
		description:
			'On-site and off-site dishwashing services designed for institutional scale. We operate centralised washing facilities and client-side units backed by audit-ready SOPs, trained teams, controlled chemical dosing, and strict quality checks — ensuring consistent hygiene, compliance, and execution across locations.',
		icon: <Droplets className='w-8 h-8' />,
		href: '/what-we-do/hygiene-solutions',
	},
	{
		title: 'Reuse & Bottle Washing Systems',
		description:
			'Enterprise-grade glass bottle and serviceware reuse solutions that enable circular operations. From collection and washing to quality control and circulation, we help large organisations reduce waste while maintaining hygiene standards and supply reliability.',
		icon: <Droplets className='w-8 h-8' />,
		href: '/what-we-do/bottle-washing-solutions',
	},
	{
		title: 'Commercial Kitchen & Serviceware',
		description:
			'End-to-end support for commercial kitchens — from setup and layout design to equipment, serviceware, and smallware supply. We optimise workflows, utility usage, and processes to create kitchens that are safer, more efficient, and easier to operate at scale.',
		icon: <ChefHat className='w-8 h-8' />,
		href: '/what-we-do/commercial-kitchen-solutions',
	},
	{
		title: 'Event & High-Volume Operations',
		description:
			'Operational support for corporate events and large gatherings, covering serviceware, hygiene systems, coordination, and post-event processing. Built to handle high volumes seamlessly while maintaining sustainability and operational discipline.',
		icon: <Users className='w-8 h-8' />,
		href: '/what-we-do/manpower-solutions',
	},
];

export default function EcosystemSection() {
	return (
		<section className='relative bg-white section-padding py-16 md:py-24 overflow-hidden z-10'>
			{/* Subtle Background Pattern */}
			<div className='absolute inset-0 opacity-[0.02]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<div className='flex flex-col !gap-0'>
					{/* Section Header */}
					<SectionHeader />

					{/* Pillars Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch'>
						{pillars.map((pillar, idx) => (
							<PillarCard
								key={idx}
								title={pillar.title}
								description={pillar.description}
								icon={pillar.icon}
								href={pillar.href}
								index={idx}
							/>
						))}
					</div>

					{/* Bottom CTA */}
					<div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
						<BottomCTA />
					</div>
				</div>
			</div>
		</section>
	);
}
