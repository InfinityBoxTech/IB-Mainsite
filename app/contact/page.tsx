'use client';

import { Suspense } from 'react';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

function ContactContent() {
	return (
		<main className='min-h-screen bg-neutral-900 relative selection:bg-emerald-500/30'>
			{/* Background Gradients */}
			<div className='fixed inset-0 pointer-events-none'>
				<div className='absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-900/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2' />
				<div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-900/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3' />
			</div>

			<div className='relative z-10 container mx-auto section-padding min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-24'>
				{/* Left Side: Info & Context */}
				<div className='w-full lg:w-1/2 lg:h-[600px]'>
					<ContactInfo />
				</div>

				{/* Right Side: Smart Form */}
				<div className='w-full lg:w-1/2 max-w-xl'>
					<ContactForm />
				</div>
			</div>
		</main>
	);
}

export default function Contact() {
	return (
		<Suspense
			fallback={
				<div className='min-h-screen bg-neutral-900 flex items-center justify-center text-white'>
					Loading...
				</div>
			}
		>
			<ContactContent />
		</Suspense>
	);
}

