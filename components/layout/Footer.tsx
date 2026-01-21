'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
	solutions: [
		{ name: 'Hygiene Solutions', href: '/what-we-do/hygiene-solutions' },
		{ name: 'Bottle Washing Solutions', href: '/what-we-do/bottle-washing-solutions' },
		{
			name: 'Commercial Kitchen Solutions',
			href: '/what-we-do/commercial-kitchen-solutions',
		},
		{ name: 'Manpower Solutions', href: '/what-we-do/manpower-solutions' },
	],
	industries: [
		{ name: 'Hospitality', href: '/who-we-serve/hospitality' },
		{ name: 'Corporates', href: '/who-we-serve/corporates' },
		{ name: 'Healthcare', href: '/who-we-serve/healthcare' },
		{ name: 'Education', href: '/who-we-serve/education' },
		{ name: 'Industrial', href: '/who-we-serve/industrial' },
	],
	company: [
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Our Philosophy', href: '/about-us/philosophy' },
		{ name: 'Sustainability', href: '/about-us/sustainability' },
		{ name: 'Leadership', href: '/about-us/leadership' },
		{ name: 'Careers', href: '/about-us/careers' },
	],
	resources: [
		{ name: 'Blogs', href: '/insights/blogs' },
		{ name: 'Case Studies', href: '/insights/case-studies' },
		{ name: 'Industry Updates', href: '/insights/industry-updates' },
	],
};

const socialLinks = [
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/infinitybox/posts/?feedView=all', icon: Linkedin },
	{ name: 'Instagram', href: 'https://instagram.com/getinfinitybox', icon: Instagram },
];

const contactInfo = [
	{ icon: Mail, text: 'admin@getinfinitybox.com', href: 'mailto:admin@getinfinitybox.com' },
	{ icon: MapPin, text: 'Pan-India Operations', href: '#' },
];

export default function Footer() {
	return (
		<footer className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-300 overflow-hidden'>
			{/* Background Grid Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				/>
			</div>

			{/* Top Gradient Line */}
			<div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50' />

			<div className='container mx-auto relative z-10 section-padding pt-10 xl:pt-14 pb-10 xl:pb-14'>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12'>
					{/* Brand Column - Spans 2 columns */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='col-span-2 sm:col-span-3 lg:col-span-2'
					>
						<Link href='/' className='inline-block mb-6 group'>
							<div className='flex items-center gap-2'>
								<div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-110'>
									<span className='text-white font-bold text-xl'>∞</span>
								</div>
								<span className='text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent'>
									InfinityBox
								</span>
							</div>
						</Link>

						<p className='text-neutral-400 mb-6 max-w-md leading-relaxed'>
							Pan-India operator delivering an integrated ecosystem across
							sustainable hygiene solutions, eco-friendly packaging, commercial
							kitchens, and workforce enablement.
						</p>

						{/* Contact Info & Social Links - Single Row */}
						<div className='flex flex-wrap items-center gap-3 mb-6'>
							{contactInfo.map((item, idx) => {
								const Icon = item.icon;
								return (
									<Link
										key={idx}
										href={item.href}
										className='flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors group'
									>
										<div className='w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors flex-shrink-0'>
											<Icon className='w-4 h-4' />
										</div>
										<span className='hidden xl:inline'>{item.text}</span>
									</Link>
								);
							})}
							<div className='w-px h-5 bg-white/20 mx-1' />
							{socialLinks.map((social, idx) => {
								const Icon = social.icon;
								return (
									<Link
										key={idx}
										href={social.href}
										className='w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group'
										aria-label={social.name}
									>
										<Icon className='w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors' />
									</Link>
								);
							})}
						</div>
					</motion.div>

					{/* Solutions */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h3 className='text-white font-bold mb-6 flex items-center gap-2'>
							<div className='w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full' />
							Solutions
						</h3>
						<ul className='space-y-3'>
							{footerLinks.solutions.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='group flex items-start gap-2 text-neutral-400 hover:text-emerald-400 transition-all text-sm'
									>
										<ArrowRight className='w-3 h-3 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0' />
										<span className='group-hover:translate-x-1 transition-transform duration-300'>
											{link.name}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Industries */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className='text-white font-bold mb-6 flex items-center gap-2'>
							<div className='w-1 h-6 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full' />
							Industries
						</h3>
						<ul className='space-y-3'>
							{footerLinks.industries.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='group flex items-start gap-2 text-neutral-400 hover:text-emerald-400 transition-all text-sm'
									>
										<ArrowRight className='w-3 h-3 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0' />
										<span className='group-hover:translate-x-1 transition-transform duration-300'>
											{link.name}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Company */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h3 className='text-white font-bold mb-6 flex items-center gap-2'>
							<div className='w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full' />
							Company
						</h3>
						<ul className='space-y-3'>
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='group flex items-start gap-2 text-neutral-400 hover:text-emerald-400 transition-all text-sm'
									>
										<ArrowRight className='w-3 h-3 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0' />
										<span className='group-hover:translate-x-1 transition-transform duration-300'>
											{link.name}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Resources */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h3 className='text-white font-bold mb-6 flex items-center gap-2'>
							<div className='w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full' />
							Resources
						</h3>
						<ul className='space-y-3'>
							{footerLinks.resources.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='group flex items-start gap-2 text-neutral-400 hover:text-emerald-400 transition-all text-sm'
									>
										<ArrowRight className='w-3 h-3 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0' />
										<span className='group-hover:translate-x-1 transition-transform duration-300'>
											{link.name}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className='pt-8 border-t border-white/10'
				>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-neutral-500'>
							<p>© {new Date().getFullYear()} InfinityBox. All rights reserved.</p>
							<span className='hidden sm:inline text-neutral-700'>•</span>
							<p className='text-neutral-600'>
								Hygiene Made{' '}
								<span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold'>
									Sustainable
								</span>
							</p>
						</div>
						<div className='flex items-center gap-6'>
							<Link
								href='/privacy-policy'
								className='text-sm text-neutral-400 hover:text-emerald-400 transition-colors'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms-of-service'
								className='text-sm text-neutral-400 hover:text-emerald-400 transition-colors'
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}

