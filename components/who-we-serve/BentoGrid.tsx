'use client';

import { ReactNode } from 'react';

export default function BentoGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
	return (
		<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] ${className}`}>
			{children}
		</div>
	);
}
