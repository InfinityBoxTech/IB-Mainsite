'use client';

import {
	motion,
	useScroll,
	useTransform,
	useInView,
	MotionValue,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Droplet, Recycle, Target, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const principles = [
	{
		icon: Target,
		title: 'Problem',
		subtitle: 'Fragmented operations.',
		description:
			'Managing cafeterias at scale often means coordinating multiple vendors — dishwashing, serviceware, kitchens, bottle reuse, and event operations — each with separate processes, costs, and accountability.',
		color: 'from-blue-500 to-cyan-500',
		shadow: 'shadow-blue-500/20',
		index: 0,
	},
	{
		icon: Droplet,
		title: 'Solution',
		subtitle: 'Unified platform.',
		description:
			'InfinityBox replaces this fragmentation with a single operational platform for everything around food, excluding food itself.',
		color: 'from-emerald-500 to-teal-500',
		shadow: 'shadow-emerald-500/20',
		index: 1,
	},
	{
		icon: Recycle,
		title: 'Execution',
		subtitle: 'Integrated operations.',
		description:
			'By unifying execution, compliance, and sustainability under one system, we make cafeteria operations cleaner, more cost-effective, and dramatically easier to manage.',
		color: 'from-amber-500 to-orange-500',
		shadow: 'shadow-amber-500/20',
		index: 2,
	},
	{
		icon: CheckCircle2,
		title: 'Compliance',
		subtitle: 'Audit-ready documentation.',
		description:
			'Every step documented, every metric tracked, ensuring transparency and accountability.',
		color: 'from-purple-500 to-pink-500',
		shadow: 'shadow-purple-500/20',
		index: 3,
	},
];

export default function PhilosophySection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeStep, setActiveStep] = useState(0);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	return (
		<section ref={containerRef} className='relative bg-neutral-50 max-w-[1920px] mx-auto'>
			{/* Header - Centered similar to Case Studies */}
			<div className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className='flex justify-center mb-4 sm:mb-6'>
						<Badge
							showDot={true}
							leftText='Full Circle'
							rightText='Operations'
							separator='·'
							variant='light'
							size='md'
						/>
					</div>
					<motion.h2
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Clean That Comes{' '}
						<span className='bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
							Full Circle
						</span>
					</motion.h2>
					<motion.p
						className='text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Creating systems where inputs are optimized, waste is minimized, and
						compliance is built into every process.
					</motion.p>
				</motion.div>
			</div>

			{/* Split Layout: Left Sticky, Right Scrollable */}
			<div className='flex flex-col lg:flex-row'>
				{/* LEFT: Sticky Diagram Container */}
				<div className='hidden lg:flex lg:w-1/2 h-screen sticky top-0 items-center justify-center bg-white overflow-hidden p-4 lg:p-8 xl:p-10'>
					{/* Background Gradients */}
					<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-white to-white' />
					<div className='absolute -left-[20%] -top-[20%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-3xl animate-pulse' />
					<div className='absolute -right-[20%] -bottom-[20%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000' />

					<div className='relative z-10 scale-[0.65] lg:scale-75 xl:scale-95 2xl:scale-110'>
						<CycleVisual
							activeStep={activeStep}
							scrollProgress={scrollYProgress}
						/>
					</div>

					{/* Footer / Badge - REMOVED as per request to move to top */}
				</div>

				{/* RIGHT: Scrollable Content */}
				<div className='lg:w-1/2 relative bg-neutral-50 z-20'>
					<div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24'>
						{/* Section Header - REMOVED (Moved to top center) */}

						{/* Steps - Redesigned with elegant spacing */}
						<div className='flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 pb-12 sm:pb-16 md:pb-20 relative'>
							{/* Mobile Timeline Line - Enhanced gradient - Centered */}
							<div className='absolute left-[26px] sm:left-[30px] top-4 bottom-0 w-px bg-gradient-to-b from-emerald-400/40 via-teal-400/40 to-transparent lg:hidden' />

							{principles.map((principle, index) => (
								<StepCard
									key={index}
									data={principle}
									index={index}
									setActiveStep={setActiveStep}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function CycleVisual({
	activeStep,
	scrollProgress,
}: {
	activeStep: number;
	scrollProgress: MotionValue<number>;
}) {
	// Circumference of a circle with r=250 is 2 * PI * 250 ≈ 1570
	const circumference = 1570;

	// Map scroll progress to dash offset (drawing the line)
	// 0 progress = full offset (invisible)
	// 1 progress = 0 offset (full circle, 360 deg)
	// The line draws from 0 (Top) -> 90 (Right) -> 180 (Bottom) -> 270 (Left) -> 360 (Top)
	const dashOffset = useTransform(scrollProgress, [0, 1], [circumference, 0]);

	return (
		<div className='relative w-[520px] h-[520px] flex items-center justify-center'>
			{/* 1. Base Ring */}
			<div className='absolute inset-[10px] border-2 border-neutral-100 rounded-full' />
			<div
				className={`absolute inset-[10px] border border-neutral-200 rounded-full scale-75 opacity-50`}
			/>

			{/* 2. Progressive Active Ring (Drawing Effect) */}
			<div className='absolute inset-0 rotate-[-90deg]'>
				{' '}
				{/* Start from top */}
				<svg viewBox='0 0 500 500' className='w-full h-full'>
					<defs>
						<linearGradient id='activeGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
							<stop offset='0%' stopColor='#3b82f6' />
							<stop offset='50%' stopColor='#10b981' />
							<stop offset='100%' stopColor='#8b5cf6' />
						</linearGradient>
					</defs>
					<motion.circle
						cx='250'
						cy='250'
						r='250'
						fill='none'
						stroke='url(#activeGrad)'
						strokeWidth='6'
						strokeDasharray={circumference}
						style={{ strokeDashoffset: dashOffset }}
						strokeLinecap='round'
						className='opacity-100 transition-all duration-100'
					/>
				</svg>
			</div>

			{/* 3. Central Hub (Animated Text) - Enhanced */}
			<div className='absolute z-20 flex flex-col items-center justify-center p-8 bg-white shadow-2xl shadow-neutral-200/50 rounded-full w-48 h-48 sm:w-60 sm:h-60 border-2 border-neutral-100 group hover:border-neutral-200 transition-all duration-500'>
				{/* Subtle rotating background */}
				<motion.div
					className='absolute inset-0 rounded-full bg-gradient-to-br from-neutral-50 via-white to-neutral-50 opacity-50'
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
				/>

				<motion.div
					key={activeStep}
					initial={{ opacity: 0, scale: 0.8, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: -10 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className='text-center relative z-10'
				>
					{/* Icon with gradient background */}
					<motion.div
						className={`mb-3 mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${principles[activeStep].color} flex items-center justify-center shadow-lg ${principles[activeStep].shadow}`}
						whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
						transition={{ duration: 0.5 }}
					>
						{(() => {
							const Icon = principles[activeStep].icon;
							return <Icon className='text-white w-7 h-7' />;
						})()}
					</motion.div>

					{/* Phase label */}
					<motion.span
						className='text-xs font-black uppercase tracking-widest text-neutral-500 block mb-2'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						Phase 0{activeStep + 1}
					</motion.span>

					{/* Title with enhanced gradient */}
					<motion.span
						className={`text-2xl sm:text-3xl font-bold bg-gradient-to-br ${principles[activeStep].color} bg-clip-text text-transparent block leading-tight`}
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						{principles[activeStep].title}
					</motion.span>
				</motion.div>

				{/* Glow effect on hover */}
				<div
					className={`absolute inset-0 rounded-full bg-gradient-to-br ${principles[activeStep].color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`}
				/>
			</div>

			{/* 4. Satellite Nodes (Perfectly centered on circle) */}
			{/* Top Node (Problem) - 12 o'clock */}
			<Node
				position='top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
				active={activeStep === 0}
				icon={Target}
				color='bg-blue-500'
				title='Problem'
				index={0}
			/>
			{/* Right Node (Solution) - 3 o'clock */}
			<Node
				position='top-1/2 right-0 translate-x-1/2 -translate-y-1/2'
				active={activeStep === 1}
				icon={Droplet}
				color='bg-emerald-500'
				title='Solution'
				index={1}
			/>
			{/* Bottom Node (Execution) - 6 o'clock */}
			<Node
				position='bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
				active={activeStep >= 2}
				icon={Recycle}
				color='bg-amber-500'
				title='Execution'
				index={2}
			/>
			{/* Left Node (Compliance) - 9 o'clock */}
			<Node
				position='top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'
				active={activeStep >= 3}
				icon={CheckCircle2}
				color='bg-purple-500'
				title='Compliance'
				index={3}
			/>
		</div>
	);
}

function Node({ position, active, icon: Icon, color, title, index }: any) {
	return (
		<motion.div
			className={`absolute ${position} transition-all duration-500 z-10 flex items-center justify-center`}
			animate={{
				scale: active ? 1.2 : 1,
				y: active ? -2 : 0,
			}}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
		>
			{/* Node Circle */}
			<motion.div
				className={`
                    w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center
                    transition-all duration-500 ${
											active ? color : 'bg-white'
										} z-10 relative overflow-hidden
                `}
				whileHover={{ rotate: 360 }}
				transition={{ duration: 0.6 }}
			>
				{/* Shimmer effect when active */}
				{active && (
					<motion.div
						className='absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent'
						animate={{ rotate: 360 }}
						transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
					/>
				)}
				<Icon
					className={`w-8 h-8 transition-colors duration-500 ${
						active ? 'text-white' : 'text-neutral-300'
					} relative z-10`}
				/>
			</motion.div>

			{/* Label - Enhanced typography */}
			<div className='absolute top-full mt-3 left-1/2 -translate-x-1/2 w-32 text-center pointer-events-none'>
				<motion.span
					className={`
                        text-xs sm:text-sm font-bold uppercase tracking-wider
                        transition-all duration-300 px-3 py-1 rounded-full inline-block
                        ${
													active
														? 'text-neutral-900 bg-white shadow-lg scale-105'
														: 'text-neutral-400 bg-white/60'
												}
                    `}
					animate={{
						y: active ? -2 : 0,
						scale: active ? 1.05 : 1,
					}}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				>
					{title}
				</motion.span>
			</div>

			{/* Enhanced pulse effect when active */}
			{active && (
				<>
					<motion.div
						className={`absolute inset-0 rounded-full ${color} opacity-30`}
						animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
					/>
					<motion.div
						className={`absolute inset-0 rounded-full ${color} opacity-20`}
						animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeOut',
							delay: 0.5,
						}}
					/>
				</>
			)}
		</motion.div>
	);
}

function StepCard({ data, setActiveStep, index }: any) {
	const ref = useRef(null);
	// Relaxed margin to ensure detection works smoothly
	const isInView = useInView(ref, { margin: '-30% 0px -30% 0px', amount: 0.3 });

	useEffect(() => {
		if (isInView) {
			setActiveStep(index);
		}
	}, [isInView, setActiveStep, index]);

	const Icon = data.icon;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className='flex gap-4 sm:gap-6 items-start relative'
		>
			{/* Mobile & Tablet Timeline Connector with Icon */}
			<div
				className='lg:hidden shrink-0 relative z-10 flex items-center justify-center'
				style={{ width: '52px' }}
			>
				{/* Connecting Line to Timeline - Absolutely positioned to align with center */}
				<div className='absolute left-1/2 top-0 -translate-x-1/2 w-px h-3 bg-gradient-to-b from-transparent to-emerald-300/30' />

				{/* Icon Circle - Redesigned - Centered on timeline */}
				<motion.div
					className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-lg ${data.shadow} relative group`}
					whileHover={{ scale: 1.05, rotate: 5 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				>
					{/* Shimmer effect */}
					<div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />

					<Icon className='w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10' />

					{/* Step number badge - Subtle positioning in top-right corner */}
					<div className='absolute top-1 right-1 w-3 h-3 bg-white rounded-md flex items-center justify-center shadow-sm z-20'>
						<span className='text-[7px] sm:text-[10px] font-bold text-neutral-600'>
							{index + 1}
						</span>
					</div>
				</motion.div>
			</div>

			{/* Content Card - Redesigned */}
			<motion.div
				className='relative flex-1 p-5 sm:p-6 md:p-7 lg:p-8 bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-lg shadow-neutral-200/30 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 group overflow-hidden'
				whileHover={{ y: -4 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			>
				{/* Accent Border - Enhanced */}
				<div
					className={`absolute top-0 left-0 w-1 sm:w-1.5 h-full rounded-l-2xl sm:rounded-l-3xl bg-gradient-to-b ${data.color} group-hover:w-2 transition-all duration-300`}
				/>

				{/* Background Gradient Glow on Hover */}
				<div
					className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 pointer-events-none`}
				/>

				{/* Desktop Icon with Number - Hidden on mobile */}
				<div className='hidden lg:flex mb-4 relative'>
					<div
						className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center relative overflow-hidden shadow-lg`}
					>
						{/* Decorative background pattern */}
						<div className='absolute inset-0 opacity-20'>
							<div
								className={`absolute top-0 right-0 w-8 h-8 rounded-full bg-gradient-to-br ${data.color} opacity-30 blur-sm`}
							/>
						</div>

						{/* Number - Centered creatively */}
						<span className='text-3xl font-black text-white absolute z-10'>
							{index + 1}
						</span>

						{/* Icon - Small in corner */}
						<Icon className='w-4 h-4 text-white/60 absolute bottom-1 right-1 z-10' />
					</div>
				</div>

				{/* Content */}
				<div className='relative z-10'>
					<h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3 group-hover:text-neutral-800 transition-colors duration-300'>
						{data.title}
					</h3>
					<p className='text-base sm:text-lg text-neutral-500 font-semibold mb-3 sm:mb-4 tracking-wide'>
						{data.subtitle}
					</p>
					<p className='text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-loose'>
						{data.description}
					</p>
				</div>

				{/* Bottom decorative element */}
				<div
					className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${data.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-tl-full`}
				/>
			</motion.div>
		</motion.div>
	);
}
