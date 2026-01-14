'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

type Interest = 'Hygiene' | 'Packaging' | 'Kitchens' | 'Manpower' | 'Other';

export default function ContactForm() {
	const [interests, setInterests] = useState<Interest[]>([]);
	const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>(
		'idle'
	);

	const toggleInterest = (item: Interest) => {
		setInterests((prev) =>
			prev.includes(item)
				? prev.filter((i) => i !== item)
				: [...prev, item]
		);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormState('loading');
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setFormState('success');
	};

	return (
		<div className='bg-white rounded-3xl shadow-2xl shadow-neutral-900/10 p-6 sm:p-8 md:p-10 relative overflow-hidden'>
			{/* Decorative background blob */}
			<div className='absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none' />

			<div className='relative z-10'>
				<div className='mb-8'>
					<h2 className='text-2xl font-bold text-neutral-900 mb-2'>
						Get in Touch
					</h2>
					<p className='text-neutral-500'>
						Tell us about your needs, and we'll build the solution.
					</p>
				</div>

				{/* Interest Selector */}
				<div className='mb-8'>
					<label className='block text-sm font-medium text-neutral-700 mb-3'>
						I am interested in... <span className='text-neutral-400 text-xs font-normal'>(Select all that apply)</span>
					</label>
					<div className='flex flex-wrap gap-2'>
						{['Hygiene', 'Packaging', 'Kitchens', 'Manpower', 'Other'].map(
							(item) => (
								<button
									key={item}
									type="button"
									onClick={() => toggleInterest(item as Interest)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
										interests.includes(item as Interest)
											? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200'
											: 'bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300 hover:bg-emerald-50'
									}`}
								>
									{item}
								</button>
							)
						)}
					</div>
				</div>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<InputGroup label='Full Name' type='text' required />
						<InputGroup label='Work Email' type='email' required />
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<InputGroup label='Company Name' type='text' required />
						<InputGroup label='Phone Number' type='tel' />
					</div>
					
					<div className='group relative'>
						<textarea
							required
							rows={4}
							className='peer w-full bg-neutral-50 border-2 border-transparent rounded-xl px-4 py-3 text-neutral-900 placeholder-transparent focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-200 resize-none'
							placeholder='Message'
							id='message'
						/>
						<label
							htmlFor='message'
							className='absolute left-4 top-3 text-neutral-500 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 pointer-events-none'
						>
							Tell us about your requirements
						</label>
					</div>

					<button
						type='submit'
						disabled={formState !== 'idle'}
						className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
							formState === 'success'
								? 'bg-emerald-500 cursor-default'
								: 'bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20'
						}`}
					>
						{formState === 'loading' && (
							<Loader2 className='w-5 h-5 animate-spin' />
						)}
						{formState === 'success' && (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								className='flex items-center gap-2'
							>
								<CheckCircle2 className='w-5 h-5' />
								<span>Message Sent!</span>
							</motion.div>
						)}
						{formState === 'idle' && (
							<>
								<span>Send Message</span>
								<ArrowRight className='w-5 h-5' />
							</>
						)}
					</button>
				</form>

				{/* Trust Line */}
				<div className='mt-8 pt-6 border-t border-neutral-200'>
					<p className='text-sm text-neutral-500 text-center leading-relaxed'>
						<span className='font-medium text-neutral-700'>Response time:</span> Within 24 hours
						<br />
						<span className='text-neutral-400 mt-2 block'>
							InfinityBox does not share contact information or send unsolicited communication.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

function InputGroup({
	label,
	type,
	required,
}: {
	label: string;
	type: string;
	required?: boolean;
}) {
	const id = label.toLowerCase().replace(/\s+/g, '-');
	return (
		<div className='relative'>
			<input
				type={type}
				id={id}
				required={required}
				className='peer w-full bg-neutral-50 border-2 border-transparent rounded-xl px-4 py-3 text-neutral-900 placeholder-transparent focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-200'
				placeholder={label}
			/>
			<label
				htmlFor={id}
				className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-base transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 pointer-events-none'
			>
				{label}
				{required && <span className='text-red-400 ml-1'>*</span>}
			</label>
		</div>
	);
}
