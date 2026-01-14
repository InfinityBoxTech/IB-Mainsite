'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, Users, Target, Building2 } from 'lucide-react';

const narrativeSections = [
	{
		id: 'context',
		icon: AlertCircle,
		label: 'The Context',
		title: 'Fragmented Operations',
		content:
			'Cafeteria operations are often run through fragmented vendors, manual oversight, and inconsistent hygiene practices. We encountered this first-hand across large, high-volume environments — where accountability gaps created operational risk and inefficiency.',
		color: 'from-rose-500 to-red-600',
		bgGradient: 'from-rose-50 via-red-50/50 to-orange-50/30',
	},
	{
		id: 'why',
		icon: Target,
		label: 'Why We Exist',
		title: 'Built to Replace Fragmentation',
		content:
			'InfinityBox was founded to replace fragmented, vendor-driven cafeteria operations with a single accountable operating model. What began as a focus on reuse and hygiene evolved into building reliable infrastructure at scale.',
		color: 'from-emerald-500 to-teal-600',
		bgGradient: 'from-emerald-50 via-teal-50/50 to-cyan-50/30',
	},
	{
		id: 'who',
		icon: Users,
		label: 'Who We Are',
		title: 'Operators, Engineers, Practitioners',
		content:
			'InfinityBox is led by operators, engineers, and sustainability practitioners with hands-on experience managing complex, high-volume operations across India.',
		color: 'from-blue-500 to-indigo-600',
		bgGradient: 'from-blue-50 via-indigo-50/50 to-purple-50/30',
	},
	{
		id: 'how',
		icon: Building2,
		label: 'How We Build',
		title: 'Discipline Over Experimentation',
		content:
			'We prioritize operational discipline over rapid experimentation, standardization over ad-hoc execution, and long-term partnerships over transactional growth.',
		color: 'from-slate-600 to-neutral-700',
		bgGradient: 'from-slate-50 via-neutral-50/50 to-zinc-50/30',
	},
];

export default function OriginNarrative() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	return (
		<section
			ref={containerRef}
			className='bg-transparent px-6 sm:px-8 md:px-12'
		>
			{narrativeSections.map((section, index) => {
				const targetScale = 1 - (narrativeSections.length - index) * 0.05;

				return (
					<NarrativeCard
						key={section.id}
						section={section}
						index={index}
						progress={scrollYProgress}
						targetScale={targetScale}
					/>
				);
			})}
		</section>
	);
}

function NarrativeCard({ section, index, progress, targetScale }: any) {
	const cardRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ['start end', 'start start'],
	});

	const range = [index * 0.25, 1];
	const scale = useTransform(progress, range, [1, targetScale]);

	const Icon = section.icon;

	return (
		<div
			ref={cardRef}
			className={`h-[70vh] sm:h-[75vh] md:h-[65vh] lg:h-[50vh] xl:h-[65vh] flex ${
				index === 0 ? 'items-start pt-6 sm:pt-8 md:pt-10' : 'items-center'
			} justify-center sticky top-0`}
		>
			<motion.div
				style={{
					scale,
					top: index === 0 ? 0 : `calc(-10vh + ${index * 25}px)`,
				}}
				className='relative w-full max-w-6xl mx-auto rounded-3xl sm:rounded-4xl md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] origin-top bg-white border-2 border-neutral-100'
			>
				{/* Colored accent bar at top */}
				<div
					className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${section.color}`}
				/>

				{/* Subtle pattern overlay */}
				<div
					className='absolute inset-0 opacity-[0.02]'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
						backgroundSize: '32px 32px',
					}}
				/>

				{/* Decorative element - Behind content */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className='absolute top-8 right-8 md:top-12 md:right-12 text-[120px] md:text-[180px] lg:text-[220px] font-black text-neutral-200/40 leading-none select-none z-0'
				>
					0{index + 1}
				</motion.div>

				{/* Content */}
				<div className='relative z-20 p-6 sm:p-8 md:p-10 lg:p-12 min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] flex flex-col justify-center'>
					{/* Label Badge */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-3 mb-8'
					>
						<div
							className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-xl`}
						>
							<Icon
								className='w-6 h-6 md:w-7 md:h-7 text-white'
								strokeWidth={2}
							/>
						</div>
						<div>
							<span className='text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-600'>
								{section.label}
							</span>
							<div
								className={`h-1 w-16 md:w-20 bg-gradient-to-r ${section.color} rounded-full mt-1`}
							/>
						</div>
					</motion.div>

					{/* Title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 md:mb-8 leading-[1.1]'
					>
						{section.title}
					</motion.h2>

					{/* Content */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-4xl'
					>
						{section.content}
					</motion.p>
				</div>

				{/* Border accent */}
				<div
					className={`absolute top-0 left-0 w-1 md:w-1.5 h-full bg-gradient-to-b ${section.color}`}
				/>
			</motion.div>
		</div>
	);
}
