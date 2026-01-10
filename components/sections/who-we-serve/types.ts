export interface ValueDelivered {
	title: string;
	description: string;
}

export interface Industry {
	title: string;
	description: string;
	challenges: string[];
	valueDelivered: ValueDelivered[];
	href: string;
	accentColor: 'orange' | 'blue' | 'emerald' | 'purple' | 'slate';
	gradient: string;
}

export interface AccentColors {
	bar: string;
	text: string;
	textLight: string;
	link: string;
	border: string;
	bg: string;
}

export const accentColors: Record<
	'orange' | 'blue' | 'emerald' | 'purple' | 'slate',
	AccentColors
> = {
	orange: {
		bar: 'bg-orange-500',
		text: 'text-orange-600',
		textLight: 'text-orange-500',
		link: 'text-orange-600 hover:text-orange-700',
		border: 'border-orange-500/20',
		bg: 'bg-orange-50',
	},
	blue: {
		bar: 'bg-blue-500',
		text: 'text-blue-600',
		textLight: 'text-blue-500',
		link: 'text-blue-600 hover:text-blue-700',
		border: 'border-blue-500/20',
		bg: 'bg-blue-50',
	},
	emerald: {
		bar: 'bg-emerald-500',
		text: 'text-emerald-600',
		textLight: 'text-emerald-500',
		link: 'text-emerald-600 hover:text-emerald-700',
		border: 'border-emerald-500/20',
		bg: 'bg-emerald-50',
	},
	purple: {
		bar: 'bg-purple-500',
		text: 'text-purple-600',
		textLight: 'text-purple-500',
		link: 'text-purple-600 hover:text-purple-700',
		border: 'border-purple-500/20',
		bg: 'bg-purple-50',
	},
	slate: {
		bar: 'bg-slate-600',
		text: 'text-slate-600',
		textLight: 'text-slate-500',
		link: 'text-slate-700 hover:text-slate-900',
		border: 'border-slate-500/20',
		bg: 'bg-slate-50',
	},
};

export interface Service {
	title: string;
	description: string;
	icon: string;
	accentColor: 'orange' | 'blue' | 'emerald' | 'purple' | 'slate';
}

export const services: Service[] = [
	{
		title: 'Hygiene & Dishwashing Operations',
		description:
			'On-site and off-site dishwashing services designed for institutional scale. We operate centralised washing facilities and client-side units backed by audit-ready SOPs, trained teams, controlled chemical dosing, and strict quality checks — ensuring consistent hygiene, compliance, and execution across locations.',
		icon: '🧼',
		accentColor: 'blue',
	},
	{
		title: 'Commercial Kitchen & Serviceware',
		description:
			'End-to-end support for commercial kitchens — from setup and layout design to equipment, serviceware, and smallware supply. We optimise workflows, utility usage, and processes to create kitchens that are safer, more efficient, and easier to operate at scale.',
		icon: '🍽',
		accentColor: 'orange',
	},
	{
		title: 'Reuse & Bottle Washing Systems',
		description:
			'Enterprise-grade glass bottle and serviceware reuse solutions that enable circular operations. From collection and washing to quality control and circulation, we help large organisations reduce waste while maintaining hygiene standards and supply reliability.',
		icon: '♻️',
		accentColor: 'emerald',
	},
	{
		title: 'Event & High-Volume Operations',
		description:
			'Operational support for corporate events and large gatherings, covering serviceware, hygiene systems, coordination, and post-event processing. Built to handle high volumes seamlessly while maintaining sustainability and operational discipline.',
		icon: '🎪',
		accentColor: 'purple',
	},
];

export const industries: Industry[] = [
	{
		title: 'Hospitality & Food Services',
		description:
			'Delivering consistent guest experiences across high-volume food service environments. InfinityBox manages hygiene, dishwashing, serviceware, and operational systems behind the scenes—ensuring safety, compliance, and sustainability without disrupting service quality.',
		challenges: [
			'Maintaining consistent hygiene standards across multiple outlets and kitchens',
			'Managing high-volume dishwashing and serviceware logistics during peak hours',
			'Balancing sustainability goals with operational speed and cost pressures',
		],
		valueDelivered: [
			{
				title: 'Standardized Operations',
				description: 'Unified hygiene and dishwashing protocols implemented across locations',
			},
			{
				title: 'Operational Continuity',
				description: 'Reduced service disruptions through structured workflows and capacity planning',
			},
			{
				title: 'Guest Confidence',
				description: 'Improved hygiene assurance supporting brand trust and repeat patronage',
			},
		],
		href: '/who-we-serve/hospitality',
		accentColor: 'orange',
		gradient: 'from-orange-500 via-amber-500 to-yellow-500',
	},
	{
		title: 'Corporate Offices & IT Parks',
		description:
			'Enabling clean, efficient, and sustainable cafeteria operations in large corporate campuses. InfinityBox simplifies daily operations by managing hygiene, reuse systems, serviceware, and compliance—allowing facility teams to focus on employee experience.',
		challenges: [
			'Managing cafeteria hygiene and dishwashing across large, multi-building campuses',
			'Ensuring audit-ready compliance without constant supervision',
			'Meeting sustainability targets while controlling operational costs',
		],
		valueDelivered: [
			{
				title: 'Audit-Ready Systems',
				description: 'Always-on hygiene processes with documentation and reporting readiness',
			},
			{
				title: 'Sustainability at Scale',
				description: 'Reduced waste and resource consumption through reuse-driven operations',
			},
			{
				title: 'Cost Optimization',
				description: 'Lower total operating costs through centralized systems and vendor consolidation',
			},
		],
		href: '/who-we-serve/corporates',
		accentColor: 'blue',
		gradient: 'from-blue-500 via-indigo-500 to-purple-500',
	},
	{
		title: 'Healthcare Institutions',
		description:
			'Supporting critical hygiene and infection-control environments where failure is not an option. InfinityBox delivers rigorously controlled dishwashing, serviceware handling, and hygiene processes designed for healthcare-grade compliance.',
		challenges: [
			'Maintaining stringent hygiene standards across patient and staff food services',
			'Preventing cross-contamination through controlled dishwashing and handling',
			'Ensuring continuous regulatory compliance without operational lapses',
		],
		valueDelivered: [
			{
				title: 'Patient Safety Assurance',
				description: 'Hygiene protocols aligned with healthcare infection-control requirements',
			},
			{
				title: 'Regulatory Compliance',
				description: 'Structured SOPs ensuring adherence to healthcare standards at all times',
			},
			{
				title: 'Operational Reliability',
				description: 'Consistent execution across facilities with minimal dependency on manual oversight',
			},
		],
		href: '/who-we-serve/healthcare',
		accentColor: 'emerald',
		gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
	},
	{
		title: 'Education Campuses',
		description:
			'Creating safe, scalable, and cost-efficient cafeteria operations for educational institutions. InfinityBox manages hygiene, dishwashing, and reuse systems that support student wellbeing while operating within tight institutional budgets.',
		challenges: [
			'Managing hygiene and dishwashing for large student populations',
			'Operating efficiently with limited budgets and shared infrastructure',
			'Introducing sustainability without adding operational complexity',
		],
		valueDelivered: [
			{
				title: 'Safe Dining Environments',
				description: 'Consistent hygiene standards supporting student health and safety',
			},
			{
				title: 'Budget-Friendly Operations',
				description: 'Optimized systems designed to deliver scale without cost overruns',
			},
			{
				title: 'Embedded Sustainability',
				description: 'Practical reuse and waste-reduction practices integrated into daily operations',
			},
		],
		href: '/who-we-serve/education',
		accentColor: 'purple',
		gradient: 'from-purple-500 via-pink-500 to-rose-500',
	},
	{
		title: 'Industrial & Manufacturing',
		description:
			'Specialized solutions for heavy-duty operations. Safety-first protocols that minimize downtime and maximize efficiency.',
		challenges: [
			'Meeting heavy-duty cleaning and maintenance requirements',
			'Maintaining strict safety compliance protocols',
			'Optimizing operational efficiency and uptime',
		],
		valueDelivered: [
			{
				title: 'Industrial Solutions',
				description: 'Specialized systems designed for demanding environments',
			},
			{
				title: 'Safety-First Protocols',
				description: 'Rigorous safety standards protecting workforce',
			},
			{
				title: 'Reduced Downtime',
				description:
					'Minimized operational interruptions maximizing productivity',
			},
		],
		href: '/who-we-serve/industrial',
		accentColor: 'slate',
		gradient: 'from-slate-600 via-gray-700 to-zinc-800',
	},
];






