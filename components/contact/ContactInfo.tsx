'use client';

import { Mail, MapPin, ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactInfo() {
	return (
		<div className='flex flex-col h-full text-white'>
			{/* Header */}
			<div className='mb-12'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
						Let's Start a <br />
						<span className='text-emerald-400'>Sustainable Loop.</span>
					</h1>
					<p className='text-lg text-emerald-50 max-w-md leading-relaxed'>
						Pan India - Hygiene and sustainability partner. We're here to build scalable, compliant solutions with you.
					</p>
				</motion.div>
			</div>

			{/* Contact Cards */}
			<div className='grid gap-6 mb-12'>
				<ContactCard
					icon={<Mail className='w-6 h-6' />}
					label='Email Us'
					value='admin@getinfinitybox.com'
					href='mailto:admin@getinfinitybox.com'
					delay={0.1}
				/>
				<ContactCard
					icon={<MapPin className='w-6 h-6' />}
					label='Visit HQ'
					value='Bangalore, Karnataka, India'
					delay={0.2}
				/>
			</div>

			{/* Social / Extra */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.8 }}
				className='mt-auto pt-8 border-t border-white/10'
			>
				<h3 className='text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-4'>
					Connect
				</h3>
				<div className='flex gap-4'>
					<a
						href='https://linkedin.com/company/infinitybox'
						target='_blank'
						rel='noopener noreferrer'
						className='w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110'
						aria-label='LinkedIn'
					>
						<Linkedin className='w-4 h-4' />
					</a>
					<a
						href='https://instagram.com/infinitybox'
						target='_blank'
						rel='noopener noreferrer'
						className='w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110'
						aria-label='Instagram'
					>
						<Instagram className='w-4 h-4' />
					</a>
				</div>
			</motion.div>
		</div>
	);
}

function ContactCard({
	icon,
	label,
	value,
	href,
	delay,
}: {
	icon: React.ReactNode;
	label: string;
	value: string;
	href?: string;
	delay: number;
}) {
	const Content = () => (
		<div className='flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300'>
			<div className='p-2 bg-emerald-500/20 rounded-lg text-emerald-300'>
				{icon}
			</div>
			<div>
				<p className='text-sm text-emerald-100 mb-1'>{label}</p>
				<p className='font-medium text-lg'>{value}</p>
			</div>
		</div>
	);

	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay, duration: 0.5 }}
		>
			{href ? (
				<a href={href} className='block group'>
					<Content />
				</a>
			) : (
				<Content />
			)}
		</motion.div>
	);
}
