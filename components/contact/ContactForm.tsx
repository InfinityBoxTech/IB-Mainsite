'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

type Interest = 'Hygiene' | 'Packaging' | 'Kitchens' | 'Manpower' | 'Other';

// Get API base URL from environment variable at module level (so Next.js can replace it at build time)
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

// Helper function to build API endpoint URLs
const buildApiUrl = (endpoint: string): string => {
	if (!API_BASE_URL) {
		throw new Error('API URL is not configured. Please set NEXT_PUBLIC_API_URL in your environment variables.');
	}
	const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
	return `${API_BASE_URL}${normalizedEndpoint}`;
};

export default function ContactForm() {
	const [interests, setInterests] = useState<Interest[]>([]);
	const [formState, setFormState] = useState<'idle' | 'loading' | 'error'>(
		'idle'
	);
	const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		message: '',
	});

	const toggleInterest = (item: Interest) => {
		setInterests((prev) =>
			prev.includes(item)
				? prev.filter((i) => i !== item)
				: [...prev, item]
		);
	};

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		// Validate required fields
		if (!formData.name || !formData.email || !formData.message) {
			setFormState('error');
			return;
		}

		setFormState('loading');

		try {
			// Build email content HTML - properly formatted for email clients
			const interestsText = interests.length > 0 ? interests.join(', ') : 'None selected';
			// Escape HTML in user input to prevent XSS
			const escapeHtml = (text: string) => {
				const map: { [key: string]: string } = {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;',
					'"': '&quot;',
					"'": '&#039;',
				};
				return text.replace(/[&<>"']/g, (m) => map[m]);
			};

			const emailContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #ffffff;"><h2 style="color: #10b981; margin-top: 0;">New Lead - Contact Form Submission</h2><div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;"><p style="margin: 8px 0;"><strong>Name:</strong> ' + escapeHtml(formData.name) + '</p><p style="margin: 8px 0;"><strong>Work Email:</strong> ' + escapeHtml(formData.email) + '</p><p style="margin: 8px 0;"><strong>Company:</strong> ' + escapeHtml(formData.company || 'Not provided') + '</p><p style="margin: 8px 0;"><strong>Phone:</strong> ' + escapeHtml(formData.phone || 'Not provided') + '</p><p style="margin: 8px 0;"><strong>Interests:</strong> ' + escapeHtml(interestsText) + '</p></div><div style="margin-top: 20px;"><h3 style="color: #10b981; margin-top: 0;">Message:</h3><p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px;">' + escapeHtml(formData.message) + '</p></div></body></html>';

			const response = await fetch(buildApiUrl('/email/send'), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					from: 'admin@getinfinitybox.com',
					to: '',
					subject: 'New Lead Received - Contact Form Submission',
					content: emailContent,
				}),
			});

			if (!response.ok) {
				const errorText = await response.text();
				console.error('API Error:', response.status, errorText);
				throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
			}

			// Reset form
			setFormData({
				name: '',
				email: '',
				company: '',
				phone: '',
				message: '',
			});
			setInterests([]);
			setFormState('idle');
			
			// Show success snackbar
			setShowSuccessSnackbar(true);
			// Hide snackbar after 4 seconds
			setTimeout(() => {
				setShowSuccessSnackbar(false);
			}, 4000);
		} catch (error) {
			console.error('Contact form error:', error);
			setFormState('error');
		}
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
						<InputGroup 
							label='Full Name' 
							type='text' 
							required 
							value={formData.name}
							onChange={(e) => handleInputChange('name', e.target.value)}
						/>
						<InputGroup 
							label='Work Email' 
							type='email' 
							required 
							value={formData.email}
							onChange={(e) => handleInputChange('email', e.target.value)}
						/>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<InputGroup 
							label='Company Name' 
							type='text' 
							required 
							value={formData.company}
							onChange={(e) => handleInputChange('company', e.target.value)}
						/>
						<InputGroup 
							label='Phone Number' 
							type='tel' 
							value={formData.phone}
							onChange={(e) => handleInputChange('phone', e.target.value)}
						/>
					</div>
					
					<div className='group relative'>
						<textarea
							required
							rows={4}
							value={formData.message}
							onChange={(e) => handleInputChange('message', e.target.value)}
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

					{formState === 'error' && (
						<div className='p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm'>
							Failed to send message. Please try again or contact us directly.
						</div>
					)}

					<button
						type='submit'
						disabled={formState === 'loading'}
						className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
							formState === 'error'
								? 'bg-red-500 hover:bg-red-600'
								: 'bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20'
						}`}
					>
						{formState === 'loading' && (
							<Loader2 className='w-5 h-5 animate-spin' />
						)}
						{formState !== 'loading' && (
							<>
								<span>{formState === 'error' ? 'Try Again' : 'Send Message'}</span>
								<ArrowRight className='w-5 h-5' />
							</>
						)}
					</button>
				</form>

				{/* Success Snackbar */}
				<AnimatePresence>
					{showSuccessSnackbar && (
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 50 }}
							transition={{ duration: 0.3 }}
							className='fixed bottom-6 left-1/2 -translate-x-1/2 z-50'
						>
							<div className='bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px]'>
								<CheckCircle2 className='w-5 h-5 shrink-0' />
								<span className='font-semibold'>Message Sent!</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

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
	value,
	onChange,
}: {
	label: string;
	type: string;
	required?: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const id = label.toLowerCase().replace(/\s+/g, '-');
	return (
		<div className='relative'>
			<input
				type={type}
				id={id}
				required={required}
				value={value}
				onChange={onChange}
				className='peer w-full bg-neutral-50 border-2 border-transparent rounded-xl px-4 py-3 text-neutral-900 placeholder-transparent focus:border-emerald-500 focus:bg-white focus:outline-none transition-all duration-200'
				placeholder={label}
			/>
			<label
				htmlFor={id}
				className={`absolute left-4 transition-all duration-200 pointer-events-none ${
					value
						? '-top-2.5 text-emerald-600 text-xs bg-white px-1'
						: 'top-1/2 -translate-y-1/2 text-neutral-500 text-base peer-focus:-top-2.5 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1'
				}`}
			>
				{label}
				{required && <span className='text-red-400 ml-1'>*</span>}
			</label>
		</div>
	);
}
