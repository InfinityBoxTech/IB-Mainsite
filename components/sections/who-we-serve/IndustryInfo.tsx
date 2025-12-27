import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Industry, AccentColors } from './types';

interface IndustryInfoProps {
	industry: Industry;
	colors: AccentColors;
}

export default function IndustryInfo({ industry, colors }: IndustryInfoProps) {
	return (
		<div className='md:col-span-12 xl:col-span-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col h-full justify-between'>
			<div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
				{/* Accent Bar */}
				<div
					className={`h-2 w-16 sm:w-20 md:w-24 ${colors.bar} rounded-full origin-left`}
				/>

				{/* Title */}
				<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight'>
					{industry.title}
				</h2>

				{/* Description */}
				<p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-neutral-600 leading-[1.6] font-normal'>
					{industry.description}
				</p>
			</div>

			{/* CTA Link */}
			<div className='mt-6 sm:mt-8 md:mt-10 lg:mt-10 inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm sm:text-base transition-all group-hover:gap-2 gap-1.5'>
				<span>Explore {industry.title.split(' ')[0]} Solutions</span>
				<ArrowRight
					className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1'
					strokeWidth={2.5}
				/>
			</div>
		</div>
	);
}
