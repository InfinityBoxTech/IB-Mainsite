'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Badge from '@/components/ui/Badge';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function SectionHeader() {
	const badgeRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!badgeRef.current || !headingRef.current || !subtitleRef.current) return;

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: badgeRef.current,
					start: 'top 80%',
					once: true,
				},
			});

			tl.fromTo(
				badgeRef.current,
				{ y: -100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
			)
				.fromTo(
					headingRef.current,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
					'-=0.3'
				)
				.fromTo(
					subtitleRef.current,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
					'-=0.3'
				);
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className='flex flex-col items-center justify-center !gap-3 sm:!gap-4 md:!gap-5 lg:!gap-6 xl:!gap-6 w-full mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
			{/* Pill Badge */}
			<div ref={badgeRef} className='flex items-center justify-center'>
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
			<h2
				ref={headingRef}
				className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-semibold text-neutral-900 leading-[1.1] tracking-[-0.02em] text-center max-w-5xl whitespace-nowrap'
			>
				The Integrated Ecosystem
			</h2>

			{/* Subtitle */}
			<p
				ref={subtitleRef}
				className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-600 leading-[1.6] font-normal text-center max-w-3xl'
			>
				Fewer handovers. Clear accountability.{' '}
				<span className='font-semibold text-neutral-900'>
					One partner for your complete operations infrastructure.
				</span>
			</p>
		</div>
	);
}
