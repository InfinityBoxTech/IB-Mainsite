'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { Users, Calendar, Package, Droplets, CheckCircle2, ArrowRight, ArrowDown, Target, Sparkles, UserCheck } from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	useEffect(() => {
		if (!isInView) return;

		const duration = 2000;
		const steps = 60;
		const increment = end / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, [isInView, end]);

	return (
		<span ref={ref} className='tabular-nums'>
			{count}
			{suffix}
		</span>
	);
}

export default function ManpowerSolutions() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

	// Generate random people connection particles
	const connectionNodes = Array.from({ length: 12 }, (_, i) => ({
		id: i,
		left: `${15 + Math.random() * 70}%`,
		top: `${15 + Math.random() * 70}%`,
		delay: Math.random() * 2,
		duration: 3 + Math.random() * 2,
		size: 25 + Math.random() * 15,
	}));

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section with Animated Connection Network */}
			<section
				ref={heroRef}
				className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950'
			>
				{/* Animated Connection Network */}
				<div className='absolute inset-0 overflow-hidden'>
					{/* Connection Lines */}
					<svg className='absolute inset-0 w-full h-full'>
						{connectionNodes.map((node, i) => {
							if (i === connectionNodes.length - 1) return null;
							const nextNode = connectionNodes[i + 1];
							return (
								<motion.line
									key={`line-${i}`}
									x1={node.left}
									y1={node.top}
									x2={nextNode.left}
									y2={nextNode.top}
									stroke='rgba(147, 51, 234, 0.2)'
									strokeWidth='1'
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 0.3 }}
									transition={{
										duration: 2,
										delay: i * 0.2,
										repeat: Infinity,
										repeatType: 'reverse',
									}}
								/>
							);
						})}
					</svg>

					{/* Connection Nodes */}
					{connectionNodes.map((node) => (
						<motion.div
							key={node.id}
							className='absolute text-purple-400/30'
							style={{
								left: node.left,
								top: node.top,
								width: node.size,
								height: node.size,
							}}
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.6, 0.3],
							}}
							transition={{
								duration: node.duration,
								repeat: Infinity,
								delay: node.delay,
								ease: 'easeInOut',
							}}
						>
							<UserCheck className='w-full h-full' />
						</motion.div>
					))}
				</div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-purple-950/80'></div>

				{/* Floating Icon with Connection Effect */}
				<motion.div
					className='absolute top-1/4 right-1/4 hidden lg:block'
					animate={{
						y: [0, -20, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					<div className='relative'>
						{/* Connection Rings */}
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								className='absolute inset-0 rounded-full border-2 border-purple-400'
								initial={{ scale: 1, opacity: 0.6 }}
								animate={{
									scale: [1, 2, 3],
									opacity: [0.6, 0.3, 0],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: i * 1,
									ease: 'easeOut',
								}}
								style={{
									width: 100,
									height: 100,
									left: '50%',
									top: '50%',
									marginLeft: -50,
									marginTop: -50,
								}}
							/>
						))}
						<motion.div
							className='relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-2xl'
							animate={{
								boxShadow: [
									'0 0 20px rgba(168, 85, 247, 0.5)',
									'0 0 40px rgba(168, 85, 247, 0.8)',
									'0 0 20px rgba(168, 85, 247, 0.5)',
								]
							}}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						>
							<Users className='w-12 h-12 text-white' />
						</motion.div>
					</div>
				</motion.div>

				{/* Hero Content */}
				<motion.div
					style={{ y: heroY, opacity: heroOpacity }}
					className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 mb-6'
					>
						<Sparkles className='w-4 h-4 text-purple-400' />
						<span className='text-sm font-medium text-purple-400'>High-Volume Ready</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight'
					>
						Event & High Volume
						<br />
						<span className='bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent'>
							Operations
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-xl sm:text-2xl md:text-3xl text-purple-100 max-w-4xl mx-auto mb-12 leading-relaxed'
					>
						Operational support for corporate events and large gatherings, covering serviceware, hygiene systems, coordination, and post-event processing. Built to handle high volumes seamlessly while maintaining sustainability and operational discipline.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Link
							href='/contact'
							className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
						>
							<span>Get Started</span>
							<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
						</Link>
						<Link
							href='#ecosystem'
							className='group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300'
						>
							<span>Learn More</span>
							<ArrowDown className='w-5 h-5 transition-transform duration-300 group-hover:translate-y-1' />
						</Link>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2'
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						className='w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2'
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
							className='w-1.5 h-1.5 bg-white rounded-full'
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Event Operations Section */}
			<section id='ecosystem' className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-50 to-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							Complete{' '}
							<span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent'>
								Event Support
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							End-to-end operational solutions for corporate events and large gatherings, from planning to post-event processing
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
						{[
							{
								icon: <Calendar className='w-8 h-8' />,
								title: 'Event Planning & Coordination',
								description:
									'Comprehensive event planning with timeline management, resource allocation, and seamless coordination across all operational aspects.',
							},
							{
								icon: <Package className='w-8 h-8' />,
								title: 'Serviceware Supply',
								description:
									'High-volume serviceware and equipment supply including plates, cutlery, glassware, and sustainable alternatives for large gatherings.',
							},
							{
								icon: <Droplets className='w-8 h-8' />,
								title: 'Hygiene Systems',
								description:
									'On-site hygiene infrastructure including dishwashing units, waste management, and sanitation protocols to maintain health standards.',
							},
							{
								icon: <Users className='w-8 h-8' />,
								title: 'Operational Team',
								description:
									'Trained event staff for setup, service, monitoring, and breakdown—ensuring smooth execution throughout the event lifecycle.',
							},
							{
								icon: <Target className='w-8 h-8' />,
								title: 'Real-Time Monitoring',
								description:
									'Live tracking of service levels, inventory, and operations to proactively address issues and maintain quality standards.',
							},
							{
								icon: <CheckCircle2 className='w-8 h-8' />,
								title: 'Post-Event Processing',
								description:
									'Comprehensive cleanup, serviceware collection, washing, and waste management with sustainability-focused disposal and recycling.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -8, scale: 1.02 }}
								className='group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10'
							>
								{/* Gradient Background on Hover */}
								<div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10'>
									<div className='mb-4 text-purple-600 inline-flex p-3 rounded-xl bg-purple-50 group-hover:bg-white transition-colors duration-300'>
										{item.icon}
									</div>
									<h3 className='text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-purple-700 transition-colors duration-300'>
										{item.title}
									</h3>
									<p className='text-neutral-600 leading-relaxed'>{item.description}</p>
								</div>

								{/* Bottom Accent Line */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 origin-left'
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Flow Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6'>
							How We{' '}
							<span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent'>
								Work
							</span>
						</h2>
						<p className='text-xl text-neutral-600 max-w-3xl mx-auto'>
							A systematic approach to delivering seamless high-volume event operations
						</p>
					</motion.div>

					<div className='max-w-5xl mx-auto space-y-8'>
						{[
							{
								step: '01',
								title: 'Event Planning & Assessment',
								description:
									'Comprehensive pre-event consultation to understand scale, requirements, venue logistics, and sustainability goals. We develop detailed operational plans covering serviceware needs, hygiene infrastructure, staffing, and timeline coordination.',
							},
							{
								step: '02',
								title: 'Resource Mobilization',
								description:
									'Rapid deployment of serviceware inventory, equipment, hygiene systems, and trained operational teams. All resources are pre-positioned and tested to ensure readiness for high-volume operations.',
							},
							{
								step: '03',
								title: 'Event Execution',
								description:
									'Real-time operational support with on-site coordination, service monitoring, inventory management, and proactive issue resolution. Our teams ensure seamless service delivery throughout the event duration.',
							},
							{
								step: '04',
								title: 'Post-Event Processing',
								description:
									'Systematic collection, washing, and processing of all serviceware with sustainable waste management. Complete cleanup, equipment breakdown, and detailed reporting on operations and sustainability metrics.',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.8, delay: idx * 0.2 }}
								className='group gap-6'
							>
								<div className='flex flex-col md:flex-row gap-6 items-start md:items-center'>
									{/* Step Number */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										className='flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/30 border-4 border-white group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300'
									>
										{item.step}
									</motion.div>

									{/* Content */}
									<div className='flex-1 bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 group-hover:border-purple-200 transition-all duration-300 group-hover:shadow-xl'>
										<h3 className='text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3 group-hover:text-purple-700 transition-colors duration-300'>
											{item.title}
										</h3>
										<p className='text-lg text-neutral-600 leading-relaxed'>{item.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-neutral-900 via-purple-950 to-indigo-950 relative overflow-hidden'>
				{/* Grid Pattern */}
				<div
					className='absolute inset-0 opacity-10'
					style={{
						backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				></div>

				<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8 }}
						className='text-center mb-16'
					>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6'>
							Event{' '}
							<span className='bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent'>
								Excellence
							</span>
						</h2>
						<p className='text-xl text-purple-100 max-w-3xl mx-auto'>
							Real results from our event and high-volume operations
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{ value: 500, suffix: '+', label: 'Events Managed' },
							{ value: 100, suffix: '%', label: 'On-Time Delivery' },
							{ value: 95, suffix: '%', label: 'Client Satisfaction' },
							{ value: 80, suffix: '%', label: 'Waste Reduction' },
						].map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -10, scale: 1.05 }}
								className='group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20'
							>
								{/* Glow Effect */}
								<div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

								<div className='relative z-10 text-center'>
									<div className='text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4'>
										<AnimatedCounter end={stat.value} suffix={stat.suffix} />
									</div>
									<div className='text-lg sm:text-xl text-purple-100 font-medium'>{stat.label}</div>
								</div>

								{/* Animated Border */}
								<motion.div
									className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400'
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-white to-neutral-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='relative overflow-hidden bg-gradient-to-br from-neutral-900 via-purple-900 to-indigo-900 rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20'
					>
						{/* Gradient Overlay */}
						<div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 opacity-50'></div>

						{/* Grid Pattern */}
						<div
							className='absolute inset-0 opacity-5'
							style={{
								backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
								backgroundSize: '50px 50px',
							}}
						></div>

						<div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8'>
							<div className='flex-1 text-center md:text-left'>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4'
								>
									Ready to{' '}
									<span className='bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent'>
										Plan Your Event
									</span>
									?
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.4 }}
									className='text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl'
								>
									Transform your corporate events and large gatherings with seamless operational support that scales
								</motion.p>
							</div>

							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<Link
									href='/contact'
									className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
								>
									<span>Get Started</span>
									<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

