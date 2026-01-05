'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Droplets, Package, ChefHat, Users } from 'lucide-react';
import VisualPanel from './VisualPanel';
import ServiceCard from './ServiceCard';

const services = [
	{
		id: 'hygiene',
		title: 'Hygiene Solutions',
		color: '#059669', // Emerald 600
		icon: Droplets,
		href: '/what-we-do/hygiene-solutions',
		problem: 'Inconsistent hygiene standards, compliance gaps, and operational inefficiencies across multi-site operations.',
		deliver: [
			'Right chemical, right dose, right process protocols',
			'Controlled dispensing systems',
			'Audit-ready compliance documentation',
			'Training-backed execution',
		],
		value: [
			'Reduced Costs',
			'100% Compliance',
			'Improved Safety',
			'Sustainability',
		],
	},
	{
		id: 'packaging',
		title: 'Packaging Solutions',
		color: '#0d9488', // Teal 600
		icon: Package,
		href: '/what-we-do/packaging-solutions',
		problem: 'Single-use plastic dependency, compliance challenges, and lack of scalable sustainable alternatives.',
		deliver: [
			'Compostable and recyclable alternatives',
			'Institutional-scale deployment',
			'Compliance-focused solutions',
			'Durability for operational needs',
		],
		value: [
			'Zero Plastic',
			'Eco Compliant',
			'Cost Neutral',
			'Brand Value',
		],
	},
	{
		id: 'kitchens',
		title: 'Commercial Kitchens',
		color: '#0891b2', // Cyan 600
		icon: ChefHat,
		href: '/what-we-do/commercial-kitchen-solutions',
		problem: 'Inefficient layouts, high utility costs, maintenance challenges, and workflow bottlenecks.',
		deliver: [
			'Lifecycle support from setup to maintenance',
			'Layout and workflow optimization',
			'Utility efficiency systems',
			'Preventive maintenance programs',
		],
		value: [
			'High Efficiency',
			'Lower Utilities',
			'Less Downtime',
			'Longer Lifespan',
		],
	},
	{
		id: 'manpower',
		title: 'Manpower Solutions',
		color: '#0284c7', // Sky 600
		icon: Users,
		href: '/what-we-do/manpower-solutions',
		problem: 'Untrained workforce, inconsistent execution, compliance gaps, and high turnover.',
		deliver: [
			'Trained, compliant workforce',
			'SOP-driven execution',
			'Supervision and planning',
			'Multi-site coordination',
		],
		value: [
			'Reliable Ops',
			'No Risk',
			'Scalable Model',
			'Visual Reporting',
		],
	},
];

export default function ServiceScroll() {
	const [activeId, setActiveId] = useState(services[0].id);
	const containerRef = useRef<HTMLDivElement>(null);

	// Find the active service object
	const activeService = services.find((s) => s.id === activeId) || services[0];

	return (
		<div className='relative w-full' ref={containerRef}>
			<div className='container mx-auto section-padding'>
				<div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
					
					{/* Sticky Visual Panel (Desktop) */}
					<div className='hidden lg:block w-1/2 h-screen sticky top-32 flex items-start justify-center py-10'>
						<div className='w-full aspect-square max-h-[600px]'>
							<VisualPanel activeService={activeService} />
						</div>
					</div>

					{/* Scrollable Content */}
					<div className='w-full lg:w-1/2 pb-24'>
						{services.map((service) => (
							<ServiceSection 
								key={service.id} 
								service={service} 
								setActiveId={setActiveId} 
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function ServiceSection({ 
	service, 
	setActiveId 
}: { 
	service: typeof services[0], 
	setActiveId: (id: string) => void 
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "end center"]
	});

	// Trigger active state change when section is in view
    // Using a simple effect with intersection observer or scroll check would be robust,
    // but here utilizing framer motion's whileInView as a simplified trigger
    // Note: whileInView triggers once or constantly. A cleaner way for "scroll spy" is IntersectionObserver.
    // However, to keep it "React-y" and since we are using Framer Motion:
    
	return (
		<motion.div
			ref={ref}
			onViewportEnter={() => setActiveId(service.id)}
			viewport={{ amount: 0.5, margin: "-100px" }}
            className='relative' // Ensure it takes space
		>
			<ServiceCard service={service} />
		</motion.div>
	);
}
