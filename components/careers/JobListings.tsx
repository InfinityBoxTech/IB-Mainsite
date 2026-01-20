'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { JobListing, Department } from './types';
import { fetchJobs } from './api';
import JobCard from './JobCard';
import DepartmentFilter from './DepartmentFilter';
import JobDetailPanel from './JobDetailPanel';

export default function JobListings() {
	const [jobs, setJobs] = useState<JobListing[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedDepartment, setSelectedDepartment] = useState<Department>('All');
	const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

	// Fetch jobs on mount
	useEffect(() => {
		setIsLoading(true);
		setError(null);
		
		// Debug logging
		console.log('JobListings: Starting to fetch jobs...');
		
		fetchJobs({ limit: 100 })
			.then((result) => {
				console.log('JobListings: Successfully fetched jobs:', result.jobs.length);
				setJobs(result.jobs);
			})
			.catch((err) => {
				console.error('JobListings: Error fetching jobs:', err);
				setError('Failed to load job listings. Please try again later.');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	// Calculate job counts per department
	const jobCounts = useMemo(() => {
		const counts: Record<string, number> = { All: jobs.length };
		jobs.forEach((job) => {
			if (job.department) {
				counts[job.department] = (counts[job.department] || 0) + 1;
			}
		});
		return counts;
	}, [jobs]);

	// Get unique departments from jobs
	const departments = useMemo(() => {
		const deptSet = new Set<string>();
		jobs.forEach((job) => {
			if (job.department) {
				deptSet.add(job.department);
			}
		});
		return ['All', ...Array.from(deptSet).sort()] as Department[];
	}, [jobs]);

	// Filter jobs based on department
	const filteredJobs = useMemo(() => {
		return jobs.filter((job) => {
			const matchesDepartment =
				selectedDepartment === 'All' || job.department === selectedDepartment;
			return matchesDepartment;
		});
	}, [jobs, selectedDepartment]);

	const handleSelectJob = (job: JobListing) => {
		setSelectedJob(job);
		// Update URL without page reload (for shareable links)
		window.history.pushState({}, '', `/about-us/careers/${job.slug}`);
	};

	const handleClosePanel = () => {
		setSelectedJob(null);
		window.history.pushState({}, '', '/about-us/careers');
	};

	return (
		<section className='py-16 sm:py-20 md:py-24 bg-neutral-50 min-h-screen'>
			<div className='container mx-auto px-6 sm:px-8 md:px-12'>
				{/* Section header */}
				<div className='max-w-3xl mb-12 sm:mb-16'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 tracking-tight mb-6'
					>
						Open{' '}
						<span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
							Positions
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='text-lg text-neutral-600'
					>
						We&apos;re looking for people who are passionate about building
						systems that matter. Explore our current opportunities.
					</motion.p>
				</div>

				{/* Loading state */}
				{isLoading ? (
					<div className='flex flex-col items-center justify-center py-20 text-neutral-500'>
						<Loader2 className='w-10 h-10 animate-spin mb-4' />
						<p>Loading job listings...</p>
					</div>
				) : error ? (
					<div className='flex flex-col items-center justify-center py-20 text-neutral-500'>
						<p className='text-red-500 mb-4'>{error}</p>
						<button
							onClick={() => window.location.reload()}
							className='px-6 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-xl font-medium transition-colors'
						>
							Try again
						</button>
					</div>
				) : (
					<>
						{/* Filters */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className='mb-10'
						>
							<DepartmentFilter
								selected={selectedDepartment}
								onSelect={setSelectedDepartment}
								jobCounts={jobCounts}
								departments={departments}
							/>
						</motion.div>

						{/* Job listings grid */}
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
							{filteredJobs.length > 0 ? (
								filteredJobs.map((job, index) => (
									<JobCard
										key={job.id}
										job={job}
										index={index}
										isSelected={selectedJob?.id === job.id}
										onSelect={handleSelectJob}
									/>
								))
							) : (
								<div className='col-span-2 py-20 text-center'>
									<div className='text-6xl mb-4'>🔍</div>
									<h3 className='text-xl font-semibold text-neutral-900 mb-2'>
										No positions found
									</h3>
									<p className='text-neutral-500'>
										{jobs.length === 0
											? "We don't have any open positions right now. Check back soon!"
											: 'Try adjusting your filters'}
									</p>
								</div>
							)}
						</div>

						{/* No openings message */}
						{jobs.length === 0 && !isLoading && (
							<div className='py-20 text-center'>
								<div className='text-6xl mb-4'>🌱</div>
								<h3 className='text-2xl font-semibold text-neutral-900 mb-4'>
									No open positions right now
								</h3>
								<p className='text-neutral-600 max-w-md mx-auto mb-8'>
									We&apos;re always looking for exceptional talent. Drop us your
									resume and we&apos;ll reach out when something opens up.
								</p>
								<a
									href='/contact?type=careers'
									className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors'
								>
									Send your resume
								</a>
							</div>
						)}
					</>
				)}
			</div>

			{/* Job detail slide-out panel */}
			<JobDetailPanel job={selectedJob} onClose={handleClosePanel} />
		</section>
	);
}
