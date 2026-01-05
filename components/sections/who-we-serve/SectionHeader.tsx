'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/ui/Badge';

gsap.registerPlugin(ScrollTrigger);

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
		<div className='w-full flex flex-col gap-6 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-4 items-start justify-start text-left mb-16 sm:mb-20 md:mb-24 lg:mb-28'>
			<div ref={badgeRef} className='flex justify-start items-center text-[10px] sm:text-xs md:text-sm lg:text-base'>
				<Badge
					showDot={true}
					leftText='Industry'
					rightText='Solutions'
					separator='·'
					variant='dark'
					size='sm'
				/>
			</div>

			<h1 ref={headingRef} className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold text-neutral-900 tracking-tight leading-[1.1] text-left w-full'>
				Who We{' '}
				<span className='relative inline-block'>
					<span className='relative z-10 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
						Serve
					</span>
					<span className='absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-cyan-400/40 rounded-full origin-left'></span>
				</span>
			</h1>

			<p ref={subtitleRef} className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-600 leading-[1.6] font-normal max-w-3xl text-left w-full'>
				Tailored strategies for diverse sectors, addressing unique challenges
				with measurable outcomes.
			</p>
		</div>
	);
}
