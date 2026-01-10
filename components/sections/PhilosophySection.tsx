'use client';

import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Droplet, Recycle, Target, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const principles = [
	{
		icon: Target,
		title: 'Problem',
		subtitle: 'Fragmented operations.',
		description: 'Managing cafeterias at scale often means coordinating multiple vendors — dishwashing, serviceware, kitchens, bottle reuse, and event operations — each with separate processes, costs, and accountability.',
		color: 'from-blue-500 to-cyan-500',
		shadow: 'shadow-blue-500/20',
		index: 0,
	},
	{
		icon: Droplet,
		title: 'Solution',
		subtitle: 'Unified platform.',
		description: 'InfinityBox replaces this fragmentation with a single operational platform for everything around food, excluding food itself.',
		color: 'from-emerald-500 to-teal-500',
		shadow: 'shadow-emerald-500/20',
		index: 1,
	},
	{
		icon: Recycle,
		title: 'Execution',
		subtitle: 'Integrated operations.',
		description: 'By unifying execution, compliance, and sustainability under one system, we make cafeteria operations cleaner, more cost-effective, and dramatically easier to manage.',
		color: 'from-amber-500 to-orange-500',
		shadow: 'shadow-amber-500/20',
		index: 2,
	},
	{
		icon: CheckCircle2,
		title: 'Compliance',
		subtitle: 'Audit-ready documentation.',
		description: 'Every step documented, every metric tracked, ensuring transparency and accountability.',
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
        offset: ['start start', 'end end']
    });

	return (
		<section ref={containerRef} className='relative bg-neutral-50'>
			{/* Header - Centered similar to Case Studies */}
			<div className='container mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className='flex justify-center mb-6'>
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
						className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight'
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
						className='text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Creating systems where inputs are optimized, waste is minimized, and compliance is built into every process.
					</motion.p>
				</motion.div>
			</div>

            {/* Split Layout: Left Sticky, Right Scrollable */}
			<div className='flex flex-col lg:flex-row'>
                
                {/* LEFT: Sticky Diagram Container */}
                <div className='hidden lg:flex lg:w-1/2 h-screen sticky top-0 items-center justify-center bg-white overflow-hidden p-10'>
                    {/* Background Gradients */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-white to-white" />
                    <div className="absolute -left-[20%] -top-[20%] w-[60%] h-[60%] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -right-[20%] -bottom-[20%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

                    <div className='relative z-10 scale-110 xl:scale-125'>
                        <CycleVisual activeStep={activeStep} scrollProgress={scrollYProgress} />
                    </div>

                    {/* Footer / Badge - REMOVED as per request to move to top */}

                </div>

                {/* RIGHT: Scrollable Content */}
                <div className='lg:w-1/2 relative bg-neutral-50 z-20'>
                    <div className='px-6 md:px-12 lg:px-20 py-24'>
                        {/* Section Header - REMOVED (Moved to top center) */}

                        {/* Steps */}
                        <div className='flex flex-col gap-[30vh] lg:gap-[40vh] pb-[20vh] relative'>
                            {/* Mobile Timeline Line */}
                            <div className="absolute left-10 top-8 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent lg:hidden -translate-x-1/2" />

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

function CycleVisual({ activeStep, scrollProgress }: { activeStep: number; scrollProgress: MotionValue<number> }) {
    // Circumference of a circle with r=250 is 2 * PI * 250 ≈ 1570
    const circumference = 1570;
    
    // Map scroll progress to dash offset (drawing the line)
    // 0 progress = full offset (invisible)
    // 1 progress = 0 offset (full circle, 360 deg)
    // The line draws from 0 (Top) -> 90 (Right) -> 180 (Bottom) -> 270 (Left) -> 360 (Top)
    const dashOffset = useTransform(scrollProgress, [0, 1], [circumference, 0]);

    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* 1. Base Ring */}
            <div className="absolute inset-0 border-2 border-neutral-100 rounded-full" />
            <div className={`absolute inset-0 border border-neutral-200 rounded-full scale-75 opacity-50`} />
            
            {/* 2. Progressive Active Ring (Drawing Effect) */}
             <div className="absolute inset-0 rotate-[-90deg]"> {/* Start from top */}
                <svg viewBox="0 0 500 500" className="w-full h-full">
                     <defs>
                        <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                     </defs>
                    <motion.circle 
                        cx="250" cy="250" r="250" 
                        fill="none" 
                        stroke="url(#activeGrad)" 
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        style={{ strokeDashoffset: dashOffset }}
                        strokeLinecap="round"
                        className="opacity-100 transition-all duration-100"
                    />
                </svg>
            </div>

            {/* 3. Central Hub (Animated Text) */}
             <div className="absolute z-20 flex flex-col items-center justify-center p-8 bg-white shadow-2xl shadow-neutral-200/50 rounded-full w-48 h-48 sm:w-60 sm:h-60 border border-neutral-100">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                >
                    <div className="mb-2 mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                        { (() => {
                             const Icon = principles[activeStep].icon;
                             return <Icon className="text-neutral-600 w-6 h-6" />
                        })() }
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">Phase 0{activeStep + 1}</span>
                    <span className="text-2xl font-bold bg-gradient-to-br from-neutral-800 to-neutral-600 bg-clip-text text-transparent block">
                        {principles[activeStep].title}
                    </span>
                </motion.div>
            </div>

            {/* 4. Satellite Nodes (Labels always at bottom) */}
            {/* Top Node (Problem) */}
            <Node 
                position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                active={activeStep >= 0} 
                icon={Target} 
                color="bg-blue-500" 
                title="Problem"
            />
            {/* Right Node (Solution) */}
            <Node 
                position="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" 
                active={activeStep >= 1} 
                icon={Droplet} 
                color="bg-emerald-500" 
                title="Solution"
            />
            {/* Bottom Node (Execution) */}
            <Node 
                position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" 
                active={activeStep >= 2} 
                icon={Recycle} 
                color="bg-amber-500" 
                title="Execution"
            />
             {/* Left Node (Compliance) */}
            <Node 
                position="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" 
                active={activeStep >= 3} 
                icon={CheckCircle2} 
                color="bg-purple-500" 
                title="Compliance"
            />
        </div>
    )
}


function Node({ position, active, icon: Icon, color, title }: any) {
    return (
        <motion.div 
            className={`absolute ${position} transition-all duration-500 z-10 flex items-center justify-center`}
            animate={{ scale: active ? 1.2 : 1 }}
        >
            <div className={`
                w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center
                transition-colors duration-500 ${active ? color : 'bg-white'} z-10
            `}>
                <Icon className={`w-8 h-8 transition-colors duration-500 ${active ? 'text-white' : 'text-neutral-300'}`} />
            </div>
            
            {/* Label - Fixed to Bottom relative to the Node icon */}
            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-32 text-center pointer-events-none">
                <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 bg-white/80 px-2 py-0.5 rounded-full ${active ? 'text-neutral-900 bg-white shadow-sm' : 'text-neutral-400'}`}>
                    {title}
                </span>
            </div>

            {/* Pulse Effect when active */}
            {active && (
                <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${color}`} />
            )}
        </motion.div>
    )
}


function StepCard({ data, setActiveStep, index }: any) {
    const ref = useRef(null);
    // Relaxed margin to ensure detection works smoothly
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px", amount: 0.3 }); 

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, setActiveStep, index]);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 md:gap-8 items-start relative pl-4 md:pl-0"
        >
            {/* Mobile Index Indicator (Hidden on Desktop since diagram shows it) */}
            <div className="lg:hidden shrink-0 mt-2 relative z-10">
                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    0{index + 1}
                 </div>
            </div>

            {/* Content */}
            <div className='relative p-8 bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/50 hover:shadow-2xl transition-all duration-500 max-w-lg'>
                 <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-gradient-to-b ${data.color}`} />
                 <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{data.title}</h3>
                 <p className="text-lg text-neutral-500 font-medium mb-4">{data.subtitle}</p>
                 <p className="text-neutral-600 leading-relaxed">{data.description}</p>
            </div>
        </motion.div>
    )
}

