'use client';

import { Droplets, ChefHat, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import PillarCard from '../PillarCard';
import BottomCTA from './BottomCTA';

const pillars = [
	{
		title: 'Hygiene Solutions',
		description:
			'End-to-end dishwashing and hygiene operations at institutional scale. Centralised off-site and on-site dishwashing with audit-ready SOPs, trained teams, and controlled chemical dosing.',
		icon: <Droplets className='w-8 h-8' />,
		href: '/what-we-do/hygiene-solutions',
	},
	{
		title: 'Bottle Washing Solutions',
		description:
			'Large-scale glass bottle reuse and washing solutions for beverage and FMCG enterprises. Bottle collection, washing, quality checks, and circulation management.',
		icon: <Droplets className='w-8 h-8' />,
		href: '/what-we-do/bottle-washing-solutions',
	},
	{
		title: 'Commercial Kitchen Solutions',
		description:
			'Lifecycle support for commercial kitchens — from design and setup to equipment supply and optimisation. Efficient layouts, equipment selection, and streamlined workflows for safety and scale.',
		icon: <ChefHat className='w-8 h-8' />,
		href: '/what-we-do/commercial-kitchen-solutions',
	},
	{
		title: 'Manpower Solutions',
		description:
			'Trained, compliant workforce with SOPs, supervision, and planning. Reliable execution across multi-site operations.',
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
