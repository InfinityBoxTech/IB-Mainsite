'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20'
		>
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-50'></div>

			{/* Grid Pattern */}
			<div className='absolute inset-0 opacity-5' style={{
				backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
				backgroundSize: '50px 50px'
			}}></div>

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
						<span className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
							Integrate
						</span>{' '}
						your operations?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl'
					>
						Let's discuss how our integrated ecosystem can transform your business
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Link
						href='/what-we-do'
						className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105'
					>
						<span>Explore Solutions</span>
						<ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
}
