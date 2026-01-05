'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Droplet, Recycle, Target, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const principles = [
	{
		icon: Target,
		title: 'Inputs',
		subtitle: 'Right chemical, right dose, right process',
		description: 'Precision dispensing and controlled processes ensure optimal resource utilization from the start.',
		color: 'from-blue-500 to-cyan-500',
		iconColor: 'text-blue-500',
		bgGlow: 'bg-blue-500/10',
		position: 'top-0 left-1/2 -translate-x-1/2',
		index: 0,
	},
	{
		icon: Droplet,
		title: 'Optimization',
		subtitle: 'System-led efficiency and waste reduction',
		description: 'Smart systems continuously monitor and optimize resource usage, reducing waste at every step.',
		color: 'from-emerald-500 to-teal-500',
		iconColor: 'text-emerald-500',
		bgGlow: 'bg-emerald-500/10',
		position: 'top-1/2 right-0 -translate-y-1/2',
		index: 1,
	},
	{
		icon: Recycle,
		title: 'Reuse',
		subtitle: 'Circular packaging and resource recovery',
		description: 'Closed-loop systems recover and reintegrate materials, minimizing environmental impact.',
		color: 'from-amber-500 to-orange-500',
		iconColor: 'text-amber-500',
		bgGlow: 'bg-amber-500/10',
		position: 'bottom-0 left-1/2 -translate-x-1/2',
		index: 2,
	},
	{
		icon: CheckCircle2,
		title: 'Compliance',
		subtitle: 'Audit-ready documentation and measurable impact',
		description: 'Every step documented, every metric tracked, ensuring transparency and accountability.',
		color: 'from-purple-500 to-pink-500',
		iconColor: 'text-purple-500',
		bgGlow: 'bg-purple-500/10',
		position: 'top-1/2 left-0 -translate-y-1/2',
		index: 3,
	},
];

export default function PhilosophySection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const circleRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(circleRef, { once: true, margin: '-100px' });
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

	return (
		<section
			ref={containerRef}
			className='relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 overflow-hidden'
		>
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
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24'
				>
					<div className='flex justify-center mb-6'>
						<Badge
							showDot={true}
							leftText='Our'
							rightText='Philosophy'
							separator='·'
							variant='light'
							size='md'
						/>
					</div>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-900 mb-6 leading-tight'>
						Clean That Comes{' '}
						<span className='bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
							Full Circle
						</span>
					</h2>
					<p className='text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
						Creating closed-loop systems where inputs are optimized, waste is minimized, and compliance is built into every process
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto'>
					{/* Left: Interactive Circle Diagram */}
					<motion.div
						ref={circleRef}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='relative aspect-square max-w-xl mx-auto w-full'
					>
						{/* Central Circle Container */}
						<div className='absolute inset-0 flex items-center justify-center'>
							{/* Rotating Outer Ring */}
							<motion.div
								style={{ rotate: isInView ? circleRotate : 0 }}
								className='absolute inset-0'
							>
								<svg
									viewBox='0 0 400 400'
									className='w-full h-full'
									xmlns='http://www.w3.org/2000/svg'
								>
									<defs>
										<linearGradient
											id='circleGradient'
											x1='0%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='#10b981' stopOpacity='0.3' />
											<stop offset='50%' stopColor='#14b8a6' stopOpacity='0.5' />
											<stop offset='100%' stopColor='#06b6d4' stopOpacity='0.3' />
										</linearGradient>
										<filter id='glow'>
											<feGaussianBlur stdDeviation='3' result='coloredBlur' />
											<feMerge>
												<feMergeNode in='coloredBlur' />
												<feMergeNode in='SourceGraphic' />
											</feMerge>
										</filter>
									</defs>

									{/* Main Circle Path */}
									<circle
										cx='200'
										cy='200'
										r='160'
										fill='none'
										stroke='url(#circleGradient)'
										strokeWidth='2'
										strokeDasharray='10 5'
										filter='url(#glow)'
									/>

									{/* Animated Flow Particles */}
									<circle cx='200' cy='40' r='4' fill='#10b981'>
										<animateMotion
											dur='8s'
											repeatCount='indefinite'
											path='M 0,0 A 160,160 0 1,1 0,0'
										/>
										<animate
											attributeName='opacity'
											values='0.3;1;0.3'
											dur='2s'
											repeatCount='indefinite'
										/>
									</circle>
									<circle cx='200' cy='40' r='4' fill='#14b8a6'>
										<animateMotion
											dur='8s'
											begin='2s'
											repeatCount='indefinite'
											path='M 0,0 A 160,160 0 1,1 0,0'
										/>
										<animate
											attributeName='opacity'
											values='0.3;1;0.3'
											dur='2s'
											repeatCount='indefinite'
										/>
									</circle>
									<circle cx='200' cy='40' r='4' fill='#06b6d4'>
										<animateMotion
											dur='8s'
											begin='4s'
											repeatCount='indefinite'
											path='M 0,0 A 160,160 0 1,1 0,0'
										/>
										<animate
											attributeName='opacity'
											values='0.3;1;0.3'
											dur='2s'
											repeatCount='indefinite'
										/>
									</circle>
									<circle cx='200' cy='40' r='4' fill='#0891b2'>
										<animateMotion
											dur='8s'
											begin='6s'
											repeatCount='indefinite'
											path='M 0,0 A 160,160 0 1,1 0,0'
										/>
										<animate
											attributeName='opacity'
											values='0.3;1;0.3'
											dur='2s'
											repeatCount='indefinite'
										/>
									</circle>
								</svg>
							</motion.div>

							{/* Center Content */}
							<div className='relative z-10 text-center'>
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
									className='w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30'
								>
									<Recycle className='w-16 h-16 sm:w-20 sm:h-20 text-white animate-[spin_20s_linear_infinite]' />
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.6 }}
									className='mt-4'
								>
									<div className='text-sm font-bold text-emerald-600 uppercase tracking-wider'>
										Circular
									</div>
									<div className='text-lg font-bold text-neutral-900'>
										Economy
									</div>
								</motion.div>
							</div>

							{/* Four Principle Nodes */}
							{principles.map((principle, idx) => {
								const Icon = principle.icon;
								return (
									<motion.div
										key={idx}
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.8 + idx * 0.15,
											type: 'spring',
											stiffness: 200,
										}}
										onMouseEnter={() => setActiveIndex(idx)}
										onMouseLeave={() => setActiveIndex(null)}
										className={`absolute ${principle.position} cursor-pointer group`}
									>
										{/* Glow Effect */}
										<div
											className={`absolute inset-0 ${principle.bgGlow} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150`}
										/>

										{/* Icon Container */}
										<div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${principle.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
											<Icon className='w-8 h-8 sm:w-10 sm:h-10 text-white' strokeWidth={2} />
										</div>

										{/* Label */}
										<div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap'>
											<div className='text-xs sm:text-sm font-bold text-neutral-900 transition-opacity duration-300'>
												{principle.title}
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Right: Principle Details */}
					<div className='space-y-6 lg:space-y-8'>
						{principles.map((principle, idx) => {
							const Icon = principle.icon;
							const isActive = activeIndex === idx;

							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: '-50px' }}
									transition={{
										duration: 0.6,
										delay: idx * 0.15,
										ease: 'easeOut',
									}}
									onMouseEnter={() => setActiveIndex(idx)}
									onMouseLeave={() => setActiveIndex(null)}
									className={`group relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500 cursor-pointer ${
										isActive
											? 'border-emerald-400 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] -translate-x-2'
											: 'border-neutral-200 hover:border-neutral-300 hover:shadow-lg'
									}`}
								>
									{/* Gradient Accent Bar */}
									<div
										className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${principle.color} rounded-l-2xl transition-all duration-500 ${
											isActive ? 'w-2' : ''
										}`}
									/>

									<div className='flex items-start gap-4 sm:gap-6'>
										{/* Icon */}
										<div
											className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
												isActive ? 'scale-110 shadow-xl' : 'group-hover:scale-105'
											}`}
										>
											<Icon className='w-7 h-7 sm:w-8 sm:h-8 text-white' strokeWidth={2} />
										</div>

										{/* Content */}
										<div className='flex-1 min-w-0'>
											<div className='flex items-center gap-2 mb-2'>
												<h3 className='text-xl sm:text-2xl font-bold text-neutral-900'>
													{principle.title}
												</h3>
												<ArrowRight
													className={`w-5 h-5 ${principle.iconColor} transition-transform duration-300 ${
														isActive ? 'translate-x-1' : ''
													}`}
												/>
											</div>
											<p className='text-sm sm:text-base font-semibold text-neutral-700 mb-3'>
												{principle.subtitle}
											</p>
											<p className='text-sm sm:text-base text-neutral-600 leading-relaxed'>
												{principle.description}
											</p>
										</div>
									</div>

									{/* Hover Glow Effect */}
									<div
										className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${principle.color} opacity-0 transition-opacity duration-500 pointer-events-none ${
											isActive ? 'opacity-[0.03]' : ''
										}`}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
