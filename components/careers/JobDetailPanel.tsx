'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	X,
	MapPin,
	Clock,
	Briefcase,
	Calendar,
	CheckCircle2,
	Sparkles,
	Gift,
	Loader2,
} from 'lucide-react';
import { JobListing, JobDetail, formatJobType, formatExperienceLevel } from './types';
import { fetchJobById } from './api';

interface JobDetailPanelProps {
	job: JobListing | null;
	onClose: () => void;
}

export default function JobDetailPanel({ job, onClose }: JobDetailPanelProps) {
	const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Fetch full job details when job is selected
	useEffect(() => {
		if (job) {
			setIsLoading(true);
			setError(null);
			fetchJobById(job.id)
				.then((detail) => {
					setJobDetail(detail);
				})
				.catch((err) => {
					setError('Failed to load job details. Please try again.');
					console.error('Error fetching job details:', err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setJobDetail(null);
		}
	}, [job]);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [onClose]);

	// Prevent body scroll when panel is open
	useEffect(() => {
		if (job) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [job]);

	const formatDate = (dateString: string | null) => {
		if (!dateString) return 'Recently posted';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<AnimatePresence>
			{job && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className='fixed inset-0 bg-black/50 backdrop-blur-sm z-998 lg:hidden'
					/>

					{/* Desktop: Dim the job list area */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className='hidden lg:block fixed inset-0 bg-black/20 z-998'
					/>

					{/* Panel */}
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', damping: 30, stiffness: 300 }}
						className='fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[70%] lg:w-[55%] xl:w-[45%] bg-white shadow-2xl z-999 overflow-hidden flex flex-col'
					>
						{/* Header */}
						<div className='flex-shrink-0 border-b border-neutral-200 px-6 sm:px-8 py-6'>
							<div className='flex items-start justify-between gap-4'>
								<div className='flex-1 min-w-0'>
									<div className='flex items-center gap-3 mb-3'>
										<span className='px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider rounded-full'>
											{job.department || 'General'}
										</span>
										<span className='text-neutral-400 text-sm flex items-center gap-1'>
											<Calendar className='w-3.5 h-3.5' />
											{formatDate(job.published_at)}
										</span>
									</div>
									<h2 className='text-2xl sm:text-3xl font-bold text-neutral-900 mb-3'>
										{job.title}
									</h2>
									<div className='flex flex-wrap gap-4 text-sm text-neutral-500'>
										<div className='flex items-center gap-1.5'>
											<MapPin className='w-4 h-4' />
											<span>{job.location || (job.is_remote ? 'Remote' : 'Not specified')}</span>
										</div>
										<div className='flex items-center gap-1.5'>
											<Briefcase className='w-4 h-4' />
											<span>{formatJobType(job.job_type)}</span>
										</div>
										<div className='flex items-center gap-1.5'>
											<Clock className='w-4 h-4' />
											<span>{formatExperienceLevel(job.experience_level)}</span>
										</div>
									</div>
								</div>

								<button
									onClick={onClose}
									className='flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors'
								>
									<X className='w-5 h-5 text-neutral-600' />
								</button>
							</div>
						</div>

						{/* Content */}
						<div className='flex-1 overflow-y-auto px-6 sm:px-8 py-8'>
							{isLoading ? (
								<div className='flex flex-col items-center justify-center h-64 text-neutral-500'>
									<Loader2 className='w-8 h-8 animate-spin mb-4' />
									<p>Loading job details...</p>
								</div>
							) : error ? (
								<div className='flex flex-col items-center justify-center h-64 text-neutral-500'>
									<p className='text-red-500 mb-4'>{error}</p>
									<button
										onClick={() => job && fetchJobById(job.id)}
										className='px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors'
									>
										Try again
									</button>
								</div>
							) : jobDetail ? (
								<>
									{/* Overview / Description */}
									{jobDetail.description?.overview && (
										<div className='mb-10'>
											<p className='text-neutral-600 text-lg leading-relaxed'>
												{jobDetail.description.overview}
											</p>
										</div>
									)}

									{/* Additional paragraphs */}
									{jobDetail.description?.paragraphs && jobDetail.description.paragraphs.length > 0 && (
										<div className='mb-10 space-y-4'>
											{jobDetail.description.paragraphs.map((para, index) => (
												<p key={index} className='text-neutral-600 leading-relaxed'>
													{para}
												</p>
											))}
										</div>
									)}

									{/* Salary info */}
									{jobDetail.description?.salary?.display && (
										<div className='mb-10 p-4 bg-neutral-50 rounded-xl border border-neutral-100'>
											<p className='text-lg font-semibold text-neutral-900'>
												{jobDetail.description.salary.display}
											</p>
										</div>
									)}

									{/* Responsibilities */}
									{jobDetail.description?.responsibilities && jobDetail.description.responsibilities.length > 0 && (
										<div className='mb-10'>
											<h3 className='flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-4'>
												<CheckCircle2 className='w-5 h-5 text-emerald-500' />
												What you&apos;ll do
											</h3>
											<ul className='space-y-3'>
												{jobDetail.description.responsibilities.map((item, index) => (
													<motion.li
														key={index}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.05 }}
														className='flex items-start gap-3 text-neutral-600'
													>
														<span className='flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2' />
														<span>{item}</span>
													</motion.li>
												))}
											</ul>
										</div>
									)}

									{/* Requirements */}
									{jobDetail.description?.requirements && jobDetail.description.requirements.length > 0 && (
										<div className='mb-10'>
											<h3 className='flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-4'>
												<Sparkles className='w-5 h-5 text-blue-500' />
												What we&apos;re looking for
											</h3>
											<ul className='space-y-3'>
												{jobDetail.description.requirements.map((item, index) => (
													<motion.li
														key={index}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.2 + index * 0.05 }}
														className='flex items-start gap-3 text-neutral-600'
													>
														<span className='flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2' />
														<span>{item}</span>
													</motion.li>
												))}
											</ul>
										</div>
									)}

									{/* Preferred qualifications (nice to have) */}
									{jobDetail.description?.qualifications?.preferred && jobDetail.description.qualifications.preferred.length > 0 && (
										<div className='mb-10'>
											<h3 className='flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-4'>
												<Gift className='w-5 h-5 text-purple-500' />
												Nice to have
											</h3>
											<ul className='space-y-3'>
												{jobDetail.description.qualifications.preferred.map((item, index) => (
													<motion.li
														key={index}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.4 + index * 0.05 }}
														className='flex items-start gap-3 text-neutral-600'
													>
														<span className='flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-2' />
														<span>{item}</span>
													</motion.li>
												))}
											</ul>
										</div>
									)}

									{/* Benefits */}
									{jobDetail.description?.benefits && jobDetail.description.benefits.length > 0 && (
										<div className='mb-10 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100'>
											<h3 className='text-lg font-semibold text-neutral-900 mb-4'>
												What we offer
											</h3>
											<ul className='space-y-3'>
												{jobDetail.description.benefits.map((item, index) => (
													<motion.li
														key={index}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.5 + index * 0.05 }}
														className='flex items-center gap-3 text-neutral-700'
													>
														<CheckCircle2 className='w-5 h-5 text-emerald-500 flex-shrink-0' />
														<span>{item}</span>
													</motion.li>
												))}
											</ul>
										</div>
									)}
								</>
							) : null}
						</div>

						{/* Footer Note */}
						<div className='flex-shrink-0 border-t border-neutral-200 px-6 sm:px-8 py-6 bg-neutral-50'>
							<div className='text-center'>
								<p className='text-neutral-600 text-sm sm:text-base'>
									Please apply with your CV to{' '}
									<a
										href='mailto:admin@getinfinitybox.com'
										className='text-emerald-600 hover:text-emerald-700 font-medium underline'
									>
										hiring@getinfinitybox.com
									</a>
								</p>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
