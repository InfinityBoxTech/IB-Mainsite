'use client';

import { motion, useScroll, useTransform, clamp } from 'framer-motion';
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const items = [
	{
		title: 'Our Philosophy',
		subtitle: 'Clean That Comes Full Circle',
		href: '/about-us/philosophy',
		color: 'bg-emerald-900',
		text: 'text-emerald-100',
	},
	{
		title: 'Sustainability',
		subtitle: 'Action-Led Impact',
		href: '/about-us/sustainability',
		color: 'bg-teal-900',
		text: 'text-teal-100',
	},
	{
		title: 'Leadership',
		subtitle: 'Visionaries & Executors',
		href: '/about-us/leadership',
		color: 'bg-neutral-900',
		text: 'text-neutral-100',
	},
	{
		title: 'Careers',
		subtitle: 'Build The Future',
		href: '/about-us/careers',
		color: 'bg-slate-900',
		text: 'text-slate-100',
	},
];

export default function HorizontalGallery() {
	const targetRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [scrollRange, setScrollRange] = React.useState(0);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});

	React.useEffect(() => {
		// Calculate total scrollable width
		const updateScrollRange = () => {
			if (contentRef.current) {
				const width = contentRef.current.scrollWidth;
				const viewportWidth = window.innerWidth;
				// Calculate how much we need to scroll to show all content
				// Start from 0 (showing header + first card) and scroll until last card is visible
				const scrollableDistance = Math.max(0, width - viewportWidth);
				setScrollRange(scrollableDistance);
			}
		};

		updateScrollRange();
		window.addEventListener('resize', updateScrollRange);
		return () => window.removeEventListener('resize', updateScrollRange);
	}, []);

	// Start from 0 (beginning) and scroll to show all cards
	// Add delay at start and end - only animate when section is fully in view
	// Map scroll progress: 0-0.2 = no movement, 0.2-0.7 = scroll, 0.7-1 = no movement (more delay at end)
	const x = useTransform(
		scrollYProgress,
		[0, 0.2, 0.7, 1],
		['0px', '0px', `-${scrollRange}px`, `-${scrollRange}px`],
		{
			clamp: true,
		}
	);

	return (
		<section ref={targetRef} className='relative h-[300vh] bg-transparent'>
			<div className='sticky top-0 flex h-[100vh] sm:h-[90vh] md:h-screen items-center justify-start overflow-hidden'>
				<motion.div
					ref={contentRef}
					style={{ x }}
					className='flex gap-6 sm:gap-8 px-6 sm:px-8 md:px-12'
				>
					<div className='flex flex-col justify-center min-w-[30vw] md:min-w-[25vw] px-8'>
						<h2 className='text-5xl font-bold text-neutral-900 mb-6'>
							Explore
							<br />
							InfinityBox
						</h2>
						<p className='text-xl text-neutral-500'>
							Dive deeper into our ecosystem and the people behind it.
						</p>
					</div>
					{items.map((item, i) => (
						<Link
							key={i}
							href={item.href}
							className='group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-3xl cursor-pointer'
						>
							<div
								className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${item.color}`}
							/>

							<div className='absolute inset-0 p-8 flex flex-col justify-between'>
								<div className='flex justify-between items-start'>
									<span
										className={`text-sm font-bold uppercase tracking-widest opacity-70 ${item.text}`}
									>
										0{i + 1}
									</span>
									<div className='bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<ArrowUpRight className='text-white' />
									</div>
								</div>
								<div>
									<h3 className='text-4xl font-bold text-white mb-2'>
										{item.title}
									</h3>
									<p className={`text-lg opacity-80 ${item.text}`}>
										{item.subtitle}
									</p>
								</div>
							</div>
						</Link>
					))}
				</motion.div>
			</div>
		</section>
	);
}
