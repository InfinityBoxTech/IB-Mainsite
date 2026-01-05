'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const navigation = [
	{
		name: 'What We Do',
		href: '/what-we-do',
		children: [
			{ name: 'Hygiene Solutions', href: '/what-we-do/hygiene-solutions' },
			{
				name: 'Packaging Solutions',
				href: '/what-we-do/packaging-solutions',
			},
			{
				name: 'Commercial Kitchen Solutions',
				href: '/what-we-do/commercial-kitchen-solutions',
			},
			{ name: 'Manpower Solutions', href: '/what-we-do/manpower-solutions' },
		],
	},
	{
		name: 'Who We Serve',
		href: '/who-we-serve',
		children: [
			{ name: 'Hospitality', href: '/who-we-serve/hospitality' },
			{ name: 'Corporates', href: '/who-we-serve/corporates' },
			{ name: 'Healthcare', href: '/who-we-serve/healthcare' },
			{ name: 'Education', href: '/who-we-serve/education' },
			{ name: 'Industrial', href: '/who-we-serve/industrial' },
		],
	},
	{
		name: 'About Us',
		href: '/about-us',
		children: [
			{ name: 'About InfinityBox', href: '/about-us' },
			{ name: 'Our Philosophy', href: '/about-us/philosophy' },
			{
				name: 'Sustainability Commitment',
				href: '/about-us/sustainability',
			},
			{ name: 'Leadership', href: '/about-us/leadership' },
			{ name: 'Careers', href: '/about-us/careers' },
		],
	},
	{
		name: 'Insights',
		href: '/insights',
		children: [
			{ name: 'Blogs', href: '/insights/blogs' },
			{ name: 'Case Studies', href: '/insights/case-studies' },
			{ name: 'Industry Updates', href: '/insights/industry-updates' },
		],
	},
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
	const [mounted, setMounted] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setActiveDropdown(null);
			}
		};

		if (activeDropdown) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [activeDropdown]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-500 ${
				isScrolled
					? 'bg-white shadow-lg shadow-neutral-900/5 border-b border-neutral-100'
					: 'bg-white'
			}`}
		>
			<nav className='mx-auto px-4 sm:px-6 lg:px-8' style={{ maxWidth: '1280px' }}>
				<div className='flex items-center justify-between h-16 sm:h-18 md:h-20'>
					{/* Logo */}
					<div
						onClick={() => router.push('/')}
						className='flex items-center group cursor-pointer'
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3, type: 'spring' }}
							className='relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto'
						>
							<Image
								src='/IBlogo.jpeg'
								alt='InfinityBox Logo'
								width={180}
								height={64}
								className='h-full w-auto object-contain'
								priority
							/>
						</motion.div>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex items-center gap-1 xl:gap-2'>
						{navigation.map((item) => (
							<div
								key={item.name}
								className='relative group'
								onMouseEnter={() =>
									item.children && setActiveDropdown(item.name)
								}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<Link
									href={item.href}
									className='relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-neutral-700 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-1'
								>
									{item.name}
									{item.children && (
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-300 ${
												activeDropdown === item.name ? 'rotate-180' : ''
											}`}
										/>
									)}
									<motion.span
										className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 origin-left rounded-full'
										initial={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ duration: 0.3, ease: 'easeOut' }}
									/>
								</Link>
								{item.children && (
									<AnimatePresence>
										{activeDropdown === item.name && (
											<motion.div
												initial={{ opacity: 0, y: 10, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: 10, scale: 0.95 }}
												transition={{
													duration: 0.2,
													ease: [0.4, 0, 0.2, 1],
												}}
												className='absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden'
											>
												{/* Gradient overlay */}
												<div className='absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/30 pointer-events-none' />

												<div className='relative p-2'>
													{item.children.map((child, childIndex) => (
														<motion.div
															key={child.name}
															initial={{ opacity: 0, x: -10 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{
																delay: childIndex * 0.05,
																duration: 0.2,
															}}
														>
															<Link
																href={child.href}
																className='group/item relative flex items-center justify-between px-4 py-3 text-sm text-neutral-700 hover:text-emerald-600 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-200'
															>
																<span className='font-medium'>{child.name}</span>
																<ArrowRight className='w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300' />
																<motion.span
																	className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-r-full origin-top'
																	initial={{ scaleY: 0 }}
																	whileHover={{ scaleY: 1 }}
																	transition={{ duration: 0.2 }}
																/>
															</Link>
														</motion.div>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								)}
							</div>
						))}
					</div>

					{/* CTA Button - Desktop */}
					<div className='hidden lg:block'>
						<Link href='/contact'>
							<motion.button
								className='group relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-sm xl:text-base shadow-lg shadow-emerald-500/30 overflow-hidden'
								whileHover={{ scale: 1.05, y: -1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: 'spring', stiffness: 400, damping: 17 }}
							>
								<span className='relative z-10 flex items-center gap-2'>
									Get in Touch
									<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
								</span>
								{/* Shine effect */}
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
							</motion.button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='lg:hidden p-2 text-neutral-700 hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Toggle menu'
					>
						<div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</div>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{/* Mobile Menu - Portalled to body to escape Header's stacking context */}
			{mounted && createPortal(
				<AnimatePresence>
					{mobileMenuOpen && (
						<>
							{/* Backdrop */}
							<motion.div
								key="mobile-backdrop"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[9998] lg:hidden'
								onClick={() => setMobileMenuOpen(false)}
							/>

							{/* Menu Panel */}
							<motion.div
								key="mobile-menu-panel"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className='fixed inset-0 bg-white/80 backdrop-blur-xl z-[9999] lg:hidden flex flex-col'
							>
								{/* Mobile Menu Header */}
								<div className='flex items-center justify-between px-4 py-4 border-b border-neutral-100'>
									<div
										onClick={() => {
											setMobileMenuOpen(false);
											router.push('/');
										}}
										className='flex items-center cursor-pointer'
									>
										<div className='relative h-10 w-auto'>
											<Image
												src='/IBlogo.jpeg'
												alt='InfinityBox Logo'
												width={140}
												height={40}
												className='h-full w-auto object-contain'
											/>
										</div>
									</div>
									<button
										onClick={() => setMobileMenuOpen(false)}
										className='p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors'
										aria-label="Close menu"
									>
										<X size={24} />
									</button>
								</div>

								{/* Gradient background */}
								<div className='absolute inset-0 bg-gradient-to-br from-emerald-50/10 via-white/20 to-teal-50/10 pointer-events-none -z-10' />

								<div className='flex-1 overflow-y-auto'>
									<div className='relative px-6 py-8 space-y-4 container mx-auto max-w-lg'>
										{navigation.map((item, index) => (
											<motion.div
												key={item.name}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.05 + 0.1 }}
											>
												{item.children ? (
													<>
														<button
															onClick={() =>
																setMobileExpanded(
																	mobileExpanded === item.name
																		? null
																		: item.name
																)
															}
															className='w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-neutral-900 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-200'
														>
															<span>{item.name}</span>
															<div
																className={`transition-transform duration-200 ${
																	mobileExpanded === item.name
																		? 'rotate-180'
																		: ''
																}`}
															>
																<ChevronDown size={20} />
															</div>
														</button>
														<AnimatePresence>
															{mobileExpanded === item.name && (
																<motion.div
																	initial={{ height: 0, opacity: 0 }}
																	animate={{ height: 'auto', opacity: 1 }}
																	exit={{ height: 0, opacity: 0 }}
																	transition={{ duration: 0.2 }}
																	className='overflow-hidden'
																>
																	<div className='pl-4 pr-2 py-2 space-y-1'>
																		{item.children.map(
																			(child, childIndex) => (
																				<motion.div
																					key={child.name}
																					initial={{ opacity: 0, x: -10 }}
																					animate={{
																						opacity: 1,
																						x: 0,
																					}}
																					transition={{
																						delay: childIndex * 0.05,
																					}}
																				>
																					<div
																						className='group/child flex items-center justify-between px-4 py-2.5 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 rounded-lg transition-all duration-200 cursor-pointer'
																						onClick={() => {
																							setMobileMenuOpen(false);
																							setMobileExpanded(null);
																							router.push(child.href);
																						}}
																					>
																						<span>{child.name}</span>
																						<ArrowRight className='w-3 h-3 opacity-0 -translate-x-2 group-hover/child:opacity-100 group-hover/child:translate-x-0 transition-all duration-300' />
																					</div>
																				</motion.div>
																			)
																		)}
																	</div>
																</motion.div>
															)}
														</AnimatePresence>
													</>
												) : (
													<div
														className='flex items-center justify-between px-4 py-3 text-base font-semibold text-neutral-900 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-200 group cursor-pointer'
														onClick={() => {
															setMobileMenuOpen(false);
															router.push(item.href);
														}}
													>
														<span>{item.name}</span>
														<ArrowRight className='w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
													</div>
												)}
											</motion.div>
										))}

										{/* Mobile CTA */}
										<motion.div
											className='pt-6'
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 }}
										>
											<Link
												href='/contact'
												className='group relative flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/30 overflow-hidden'
												onClick={() => setMobileMenuOpen(false)}
											>
												<span className='relative z-10'>Get in Touch</span>
												<ArrowRight className='relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1' />
												<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
											</Link>
										</motion.div>
									</div>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>,
				document.body
			)}
		</header>
	);
}
