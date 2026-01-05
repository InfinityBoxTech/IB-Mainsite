'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Package, ChefHat, Users } from 'lucide-react';

interface Service {
	id: string;
	title: string;
	color: string;
	icon: React.ElementType;
}

interface VisualPanelProps {
	activeService: Service;
}

export default function VisualPanel({ activeService }: VisualPanelProps) {
	const Icon = activeService.icon;

	return (
		<div className='w-full h-full rounded-3xl overflow-hidden relative shadow-2xl shadow-neutral-900/20'>
			{/* Dynamic Background */}
			<motion.div
				className='absolute inset-0 bg-neutral-900'
				animate={{
					backgroundColor: activeService.color,
				}}
				transition={{ duration: 0.8 }}
			>
				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-black/20 to-black/60' />
				
				{/* Pattern Overlay */}
				<div 
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
						backgroundSize: "32px 32px"
					}}
				/>
			</motion.div>

			{/* Content Container */}
			<div className='relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-white'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeService.id}
						initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
						transition={{ 
							type: "spring",
							stiffness: 200,
							damping: 20,
							duration: 0.5 
						}}
						className="relative"
					>
						{/* Glow behind icon */}
						<div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
						
						<Icon className='w-32 h-32 md:w-48 md:h-48 relative z-10 drop-shadow-2xl' strokeWidth={1} />
					</motion.div>
				</AnimatePresence>

				<AnimatePresence mode='wait'>
					<motion.h2
						key={activeService.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='mt-8 text-3xl md:text-4xl font-bold text-center tracking-tight'
					>
						{activeService.title}
					</motion.h2>
				</AnimatePresence>
			</div>
		</div>
	);
}
