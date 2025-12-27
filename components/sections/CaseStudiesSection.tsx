'use client';

import Card from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
	{
		title: 'Multi-Site Hospitality Chain',
		description:
			'Standardized hygiene protocols across 25 locations, achieving 100% compliance and reducing operational costs by 22%.',
		href: '/insights/case-studies/multi-site-hospitality',
	},
	{
		title: 'Corporate IT Park',
		description:
			'Deployed integrated solutions across 2M sq ft, reducing waste by 35% and achieving LEED certification support.',
		href: '/insights/case-studies/corporate-it-park',
	},
];

export default function CaseStudiesSection() {
	return (
		<section className='section-padding bg-white'>
			<div className='container'>
				<div className='max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight'>
						Proven Results
					</h2>
					<p className='text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto'>
						Real outcomes from real deployments across India.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto'>
					{caseStudies.map((study, idx) => (
						<Card key={idx} href={study.href} className='h-full'>
							<h3 className='text-xl sm:text-2xl font-semibold text-neutral-900 mb-3 sm:mb-4 leading-tight'>
								{study.title}
							</h3>
							<p className='text-neutral-600 mb-5 sm:mb-6 leading-relaxed'>
								{study.description}
							</p>
							<div className='inline-flex items-center text-emerald-600 font-medium group-hover:underline'>
								Read Case Study
								<ArrowRight
									size={16}
									className='ml-2 group-hover:translate-x-1 transition-transform'
								/>
							</div>
						</Card>
					))}
				</div>
				<div className='text-center mt-10 sm:mt-12'>
					<Link
						href='/insights/case-studies'
						className='inline-flex items-center text-emerald-600 font-medium hover:underline group'
					>
						View All Case Studies
						<ArrowRight
							size={16}
							className='ml-2 group-hover:translate-x-1 transition-transform'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}

