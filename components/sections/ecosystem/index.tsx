'use client';

import { Droplets, Package, ChefHat, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import PillarCard from '../PillarCard';
import BottomCTA from './BottomCTA';

const pillars = [
	{
		title: 'Hygiene Solutions',
		description:
			'Right chemical, right dose, right process. Controlled dispensing, audit-ready compliance, and training-backed execution.',
		icon: <Droplets className='w-8 h-8' />,
		href: '/what-we-do/hygiene-solutions',
	},
	{
		title: 'Packaging Solutions',
		description:
			'Compostable and recyclable alternatives at institutional scale. Compliance-focused with durability for operational needs.',
		icon: <Package className='w-8 h-8' />,
		href: '/what-we-do/packaging-solutions',
	},
	{
		title: 'Commercial Kitchen Solutions',
		description:
			'Lifecycle support from setup to maintenance. Layout optimization, workflow efficiency, and utility management.',
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
