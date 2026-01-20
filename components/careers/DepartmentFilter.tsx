'use client';

import { motion } from 'framer-motion';
import { Department } from './types';

interface DepartmentFilterProps {
	selected: Department;
	onSelect: (dept: Department) => void;
	jobCounts: Record<string, number>;
	departments: Department[];
}

export default function DepartmentFilter({
	selected,
	onSelect,
	jobCounts,
	departments,
}: DepartmentFilterProps) {
	return (
		<div className='flex flex-wrap gap-2 sm:gap-3'>
			{departments.map((dept) => {
				const count = dept === 'All' ? jobCounts['All'] : jobCounts[dept] || 0;
				const isActive = selected === dept;

				// Don't show departments with no jobs (except 'All')
				if (count === 0 && dept !== 'All') return null;

				return (
					<motion.button
						key={dept}
						onClick={() => onSelect(dept)}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
							isActive
								? 'bg-neutral-900 text-white shadow-lg'
								: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
						}`}
					>
						<span className='relative z-10 flex items-center gap-2'>
							{dept}
							<span
								className={`text-xs px-1.5 py-0.5 rounded-full ${
									isActive
										? 'bg-white/20 text-white'
										: 'bg-neutral-200 text-neutral-500'
								}`}
							>
								{count}
							</span>
						</span>
					</motion.button>
				);
			})}
		</div>
	);
}
