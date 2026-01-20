'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowUpRight, Star } from 'lucide-react';
import { JobListing, formatJobType, formatExperienceLevel } from './types';

interface JobCardProps {
	job: JobListing;
	index: number;
	isSelected: boolean;
	onSelect: (job: JobListing) => void;
}

const departmentColors: Record<string, { bg: string; text: string; border: string }> = {
	Operations: {
		bg: 'bg-orange-50',
		text: 'text-orange-600',
		border: 'border-orange-200',
	},
	Technology: {
		bg: 'bg-blue-50',
		text: 'text-blue-600',
		border: 'border-blue-200',
	},
	Engineering: {
		bg: 'bg-blue-50',
		text: 'text-blue-600',
		border: 'border-blue-200',
	},
	Growth: {
		bg: 'bg-purple-50',
		text: 'text-purple-600',
		border: 'border-purple-200',
	},
	Sales: {
		bg: 'bg-purple-50',
		text: 'text-purple-600',
		border: 'border-purple-200',
	},
	Marketing: {
		bg: 'bg-pink-50',
		text: 'text-pink-600',
		border: 'border-pink-200',
	},
	Compliance: {
		bg: 'bg-emerald-50',
		text: 'text-emerald-600',
		border: 'border-emerald-200',
	},
	HR: {
		bg: 'bg-cyan-50',
		text: 'text-cyan-600',
		border: 'border-cyan-200',
	},
	Design: {
		bg: 'bg-pink-50',
		text: 'text-pink-600',
		border: 'border-pink-200',
	},
};

const defaultColors = {
	bg: 'bg-neutral-50',
	text: 'text-neutral-600',
	border: 'border-neutral-200',
};

export default function JobCard({ job, index, isSelected, onSelect }: JobCardProps) {
	const department = job.department || 'General';
	const colors = departmentColors[department] || defaultColors;

	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			onClick={() => onSelect(job)}
			className={`group relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 border cursor-pointer transition-all duration-300 ${
				isSelected
					? 'border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500'
					: 'border-neutral-200 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50'
			}`}
		>
			{/* Department badge and Featured badge */}
			<div className='flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap'>
				<div
					className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}
				>
					{department}
				</div>
				{job.is_featured && (
					<div className='inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-white shadow-lg shadow-amber-500/30'>
						<Star className='w-3 h-3 fill-white' />
						Featured
					</div>
				)}
			</div>

			{/* Role title */}
			<h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 mb-2 sm:mb-3 pr-12 sm:pr-14 group-hover:text-emerald-600 transition-colors'>
				{job.title}
			</h3>

			{/* Meta info */}
			<div className='flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-4'>
				<div className='flex items-center gap-1 sm:gap-1.5'>
					<MapPin className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
					<span>{job.location || (job.is_remote ? 'Remote' : 'Not specified')}</span>
				</div>
				<div className='flex items-center gap-1 sm:gap-1.5'>
					<Briefcase className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
					<span>{formatJobType(job.job_type)}</span>
				</div>
				<div className='flex items-center gap-1 sm:gap-1.5'>
					<Clock className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
					<span>{formatExperienceLevel(job.experience_level)}</span>
				</div>
			</div>

			{/* Categories */}
			{job.categories && job.categories.length > 0 && (
				<p className='text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2'>
					{job.categories.join(' • ')}
				</p>
			)}

			{/* Arrow indicator */}
			<div
				className={`absolute top-5 right-5 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
					isSelected
						? 'bg-emerald-500 text-white'
						: 'bg-neutral-100 text-neutral-400 group-hover:bg-emerald-500 group-hover:text-white'
				}`}
			>
				<ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' />
			</div>
		</motion.article>
	);
}
