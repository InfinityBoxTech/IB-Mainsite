"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
	{
		name: "What We Do",
		href: "/what-we-do",
		children: [
			{ name: "Hygiene Solutions", href: "/what-we-do/hygiene-solutions" },
			{
				name: "Packaging Solutions",
				href: "/what-we-do/packaging-solutions",
			},
			{
				name: "Commercial Kitchen Solutions",
				href: "/what-we-do/commercial-kitchen-solutions",
			},
			{ name: "Manpower Solutions", href: "/what-we-do/manpower-solutions" },
		],
	},
	{
		name: "Who We Serve",
		href: "/who-we-serve",
		children: [
			{ name: "Hospitality", href: "/who-we-serve/hospitality" },
			{ name: "Corporates", href: "/who-we-serve/corporates" },
			{ name: "Healthcare", href: "/who-we-serve/healthcare" },
			{ name: "Education", href: "/who-we-serve/education" },
			{ name: "Industrial", href: "/who-we-serve/industrial" },
		],
	},
	{
		name: "About Us",
		href: "/about-us",
		children: [
			{ name: "About InfinityBox", href: "/about-us" },
			{ name: "Our Philosophy", href: "/about-us/philosophy" },
			{
				name: "Sustainability Commitment",
				href: "/about-us/sustainability",
			},
			{ name: "Leadership", href: "/about-us/leadership" },
			{ name: "Careers", href: "/about-us/careers" },
		],
	},
	{
		name: "Insights",
		href: "/insights",
		children: [
			{ name: "Blogs", href: "/insights/blogs" },
			{ name: "Case Studies", href: "/insights/case-studies" },
			{ name: "Industry Updates", href: "/insights/industry-updates" },
		],
	},
	{ name: "Contact", href: "/contact" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
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
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [activeDropdown]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-white/98 backdrop-blur-xl shadow-lg shadow-neutral-900/5"
					: "bg-white/90 backdrop-blur-md"
			}`}
		>
			<nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
				<div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center space-x-2 group"
					>
						<motion.span
							className="text-xl sm:text-2xl md:text-2xl font-bold text-emerald-600"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							InfinityBox
						</motion.span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
						{navigation.map((item, index) => (
							<div
								key={item.name}
								className="relative group"
								ref={item.children ? dropdownRef : null}
								onMouseEnter={() =>
									item.children && setActiveDropdown(item.name)
								}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<Link
									href={item.href}
									className="relative px-4 py-2 text-sm xl:text-base font-medium text-neutral-700 hover:text-emerald-600 transition-colors duration-200 group"
								>
									{item.name}
									<motion.span
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 origin-left"
										initial={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
									/>
								</Link>
								{item.children && (
									<AnimatePresence>
										{activeDropdown === item.name && (
											<motion.div
												initial={{ opacity: 0, y: -10, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: -10, scale: 0.95 }}
												transition={{
													duration: 0.2,
													ease: [0.4, 0, 0.2, 1],
												}}
												className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-neutral-100 py-3 overflow-hidden"
											>
												<div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none" />
												{item.children.map((child, childIndex) => (
													<motion.div
														key={child.name}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{
															delay: childIndex * 0.03,
															duration: 0.2,
														}}
													>
														<Link
															href={child.href}
															className="relative block px-5 py-2.5 text-sm text-neutral-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 group/item"
														>
															<span className="relative z-10">{child.name}</span>
															<motion.span
																className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 origin-top"
																initial={{ scaleY: 0 }}
																whileHover={{ scaleY: 1 }}
																transition={{ duration: 0.2 }}
															/>
														</Link>
													</motion.div>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								)}
							</div>
						))}
					</div>

					{/* CTA Button - Desktop */}
					<div className="hidden lg:block">
						<Link href="/contact">
							<motion.button
								className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-sm xl:text-base hover:bg-emerald-700 transition-colors duration-200 shadow-sm hover:shadow-md"
								whileHover={{ scale: 1.05, y: -1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								Get in Touch
							</motion.button>
						</Link>
					</div>

					{/* Mobile/Tablet Menu Button */}
					<button
						className="lg:hidden p-2 text-neutral-700 hover:text-emerald-600 transition-colors rounded-lg hover:bg-neutral-100"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						<motion.div
							animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
							transition={{ duration: 0.3 }}
						>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.div>
					</button>
				</div>
			</nav>

			{/* Mobile/Tablet Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-40 lg:hidden"
							onClick={() => setMobileMenuOpen(false)}
						/>

						{/* Menu Panel */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{
								type: "spring",
								damping: 30,
								stiffness: 300,
							}}
							className="fixed top-16 sm:top-18 md:top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
						>
							<div className="px-6 py-8 space-y-1">
								{navigation.map((item, index) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: index * 0.05,
											duration: 0.3,
										}}
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
													className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-neutral-900 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg transition-all duration-200"
												>
													<span>{item.name}</span>
													<motion.div
														animate={{
															rotate:
																mobileExpanded === item.name ? 180 : 0,
														}}
														transition={{ duration: 0.2 }}
													>
														<ChevronDown size={20} />
													</motion.div>
												</button>
												<AnimatePresence>
													{mobileExpanded === item.name && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: "auto", opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.3 }}
															className="overflow-hidden"
														>
															<div className="pl-4 pr-2 py-2 space-y-1">
																{item.children.map((child, childIndex) => (
																	<motion.div
																		key={child.name}
																		initial={{ opacity: 0, x: -10 }}
																		animate={{ opacity: 1, x: 0 }}
																		transition={{
																			delay: childIndex * 0.03,
																		}}
																	>
																		<Link
																			href={child.href}
																			className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-emerald-600 hover:bg-emerald-50/30 rounded-lg transition-all duration-200"
																			onClick={() => {
																				setMobileMenuOpen(false);
																				setMobileExpanded(null);
																			}}
																		>
																			{child.name}
																		</Link>
																	</motion.div>
																))}
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</>
										) : (
											<Link
												href={item.href}
												className="block px-4 py-3 text-base font-semibold text-neutral-900 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg transition-all duration-200"
												onClick={() => setMobileMenuOpen(false)}
											>
												{item.name}
											</Link>
										)}
									</motion.div>
								))}

								{/* Mobile CTA */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: navigation.length * 0.05 }}
									className="pt-6"
								>
									<Link
										href="/contact"
										className="block w-full px-6 py-3.5 bg-emerald-600 text-white rounded-lg font-semibold text-center hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
										onClick={() => setMobileMenuOpen(false)}
									>
										Get in Touch
									</Link>
								</motion.div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
