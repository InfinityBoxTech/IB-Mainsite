'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PillarCardProps {
	title: string;
	description: string;
	Icon: LucideIcon;
	href: string;
	tags: string[];
	image: string;
	imageAlt: string;
	index: number;
}

export default function PillarCard({
	title,
	description,
	Icon,
	href,
	tags,
	image,
	imageAlt,
	index,
}: PillarCardProps) {
	const isEven = index % 2 === 0;

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.7, delay: index * 0.1 }}
			className='w-full'
		>
			<div
				className={`flex flex-col ${
					isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
				} items-stretch lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24`}
			>
				{/* Content Side */}
				<div
					className={`flex-1 w-full flex ${
						isEven
							? 'lg:pr-0 xl:pr-6 2xl:pr-8 3xl:pr-12'
							: 'lg:pl-0 xl:pl-6 2xl:pl-8 3xl:pl-12'
					}`}
				>
					<Link href={href} className='block group w-full h-full'>
						<div className='h-full flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-5 3xl:gap-10'>
							{/* Icon */}
							<div>
								<div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 rounded-lg sm:rounded-xl md:rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-200'>
									<Icon
										className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-emerald-600'
										strokeWidth={1.5}
									/>
								</div>
							</div>

							{/* Title */}
							<h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold text-neutral-900 leading-[1.2] tracking-[-0.02em]'>
								{title}
							</h3>

							{/* Description */}
							<p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-600 leading-[1.6] font-normal max-w-2xl'>
								{description}
							</p>

							{/* Tags */}
							<div className='flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5'>
								{tags.map((tag, i) => (
									<span
										key={i}
										className='inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 3xl:px-8 3xl:py-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-emerald-700 bg-emerald-50 rounded-md sm:rounded-lg border border-emerald-100'
										style={{
											fontFamily:
												'var(--font-public-sans), sans-serif',
										}}
									>
										{tag}
									</span>
								))}
							</div>

							{/* CTA */}
							<div className='flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-emerald-600 group-hover:gap-2 sm:group-hover:gap-2.5 md:group-hover:gap-3 lg:group-hover:gap-3.5 transition-all duration-200'>
								<span>Learn more</span>
								<ArrowRight
									className='w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 group-hover:translate-x-1 transition-transform duration-200'
									strokeWidth={2}
								/>
							</div>
						</div>
					</Link>
				</div>

				{/* Image Side */}
				<div
					className={`flex-1 w-full flex ${
						isEven
							? 'lg:pl-0 xl:pl-6 2xl:pl-8 3xl:pl-12'
							: 'lg:pr-0 xl:pr-6 2xl:pr-8 3xl:pr-12'
					}`}
				>
					<div className='relative w-full h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] aspect-[16/9] sm:aspect-[16/10] md:aspect-[3/2] lg:aspect-[4/3] lg:h-full lg:min-h-0 rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl overflow-hidden bg-neutral-100 group'>
						{/* Placeholder for AI Generated Image */}
						<div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-neutral-100'>
							<div className='text-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 3xl:p-16'>
								<Icon
									className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 3xl:w-40 3xl:h-40 text-emerald-600/20 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6'
									strokeWidth={1}
								/>
								<p className='text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-medium text-neutral-400 mb-1 sm:mb-1.5 md:mb-2'>
									AI Generated Image
								</p>
								<p className='text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-neutral-400'>
									{imageAlt}
								</p>
							</div>
						</div>

						{/* Uncomment when images are ready */}
						{/* 
						<Image
							src={image}
							alt={imageAlt}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-500"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						*/}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

