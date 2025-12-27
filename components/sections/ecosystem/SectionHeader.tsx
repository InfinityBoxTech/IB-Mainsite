'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/ui/Badge';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeader() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		gsap.fromTo(
			containerRef.current,
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top 80%',
					once: true,
				},
			},
		);
	}, []);

	return (
		<div
			ref={containerRef}
			className='flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-14 w-full'
		>
			{/* Pill Badge */}
			<div className='flex items-center justify-center'>
				<Badge
					showDot={true}
					leftText='Four Pillars'
					rightText='One System'
					separator='·'
					variant='dark'
					size='md'
				/>
			</div>

			{/* Main Heading */}
			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-semibold text-neutral-900 leading-[1.1] tracking-[-0.02em] text-center max-w-5xl whitespace-nowrap'>
				The Integrated Ecosystem
			</h2>

			{/* Subtitle */}
			<p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-600 leading-[1.6] font-normal text-center max-w-3xl'>
				Fewer handovers. Clear accountability. One partner for your complete
				operations infrastructure.
			</p>
		</div>
	);
}
