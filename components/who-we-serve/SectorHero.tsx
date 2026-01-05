'use client';

import { motion } from 'framer-motion';

interface SectorHeroProps {
	title: string;
	subtitle: string;
	description: string;
	gradient?: string;
}

export default function SectorHero({ 
	title, 
	subtitle,
	description,
	gradient = 'from-neutral-900 via-neutral-900 to-neutral-800',
	parentSection = 'Who We Serve'
}: SectorHeroProps & { parentSection?: string }) {
	return (
		<section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} text-white pt-20`}>
			{/* Abstract Background Elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-[url('/grid-noise.png')] opacity-20" /> {/* Placeholder for noise texture if available, or just fallback to opacity */}
				<div 
					className="absolute inset-0" 
					style={{
						backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
						backgroundSize: "40px 40px"
					}}
				/>
			</div>
			
			{/* Glow Effects */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] translate-y-1/2 pointer-events-none" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-6">
						{parentSection} / {subtitle}
					</span>
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
						{title}
					</h1>
					<p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
						{description}
					</p>
				</motion.div>
			</div>
		</section>
	);
}
