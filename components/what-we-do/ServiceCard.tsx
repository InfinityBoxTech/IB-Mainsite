'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertCircle, Zap } from 'lucide-react';
import Link from 'next/link';

interface ServiceData {
	id: string;
	title: string;
	href: string;
	problem: string;
	deliver: string[];
	value: string[];
}

interface ServiceCardProps {
	service: ServiceData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
	return (
		<div className='min-h-[80vh] flex flex-col justify-start py-10 px-4 md:px-8'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-10%" }}
				transition={{ duration: 0.6 }}
				className='bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-neutral-100'
			>
				{/* Mobile Title (visible only on small screens) */}
				<h2 className='md:hidden text-2xl font-bold text-neutral-900 mb-6'>
					{service.title}
				</h2>

				{/* The Challenge */}
				<div className='mb-8'>
					<div className='flex items-center gap-2 mb-3 text-orange-600'>
						<AlertCircle size={20} />
						<h3 className='font-semibold uppercase tracking-wider text-sm'>The Challenge</h3>
					</div>
					<p className='text-lg text-neutral-700 leading-relaxed'>
						{service.problem}
					</p>
				</div>

				{/* The Solution */}
				<div className='mb-8'>
					<div className='flex items-center gap-2 mb-3 text-emerald-600'>
						<Zap size={20} />
						<h3 className='font-semibold uppercase tracking-wider text-sm'>Our Solution</h3>
					</div>
					<ul className='space-y-3'>
						{service.deliver.map((item, idx) => (
							<li key={idx} className='flex items-start gap-3 text-neutral-600'>
								<span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0' />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Business Value */}
				<div className='mb-8'>
					<div className='flex items-center gap-2 mb-3 text-blue-600'>
						<Check size={20} />
						<h3 className='font-semibold uppercase tracking-wider text-sm'>Business Value</h3>
					</div>
					<div className='grid sm:grid-cols-2 gap-3'>
						{service.value.map((item, idx) => (
							<div key={idx} className='bg-neutral-50 rounded-lg p-3 text-sm text-neutral-700 font-medium border border-neutral-100'>
								{item}
							</div>
						))}
					</div>
				</div>

				{/* CTA */}
				<Link href={service.href}>
					<div className='group inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer'>
						<span>Explore {service.title}</span>
						<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
					</div>
				</Link>
			</motion.div>
		</div>
	);
}
