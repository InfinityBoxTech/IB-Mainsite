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

export const industries: Industry[] = [
	{
		title: 'Hospitality & Food Services',
		description:
			'Optimizing guest experiences through rigorous standards. We ensure safety and satisfaction at every touchpoint.',
		challenges: [
			'Multi-location hygiene standardization across properties',
			'Maintaining compliance across diverse operational environments',
			'Waste reduction strategies and sustainability goals',
		],
		valueDelivered: [
			{
				title: 'Standardized Protocols',
				description: 'Unified hygiene standards implemented across all chains',
			},
			{
				title: 'Operational Efficiency',
				description:
					'Significantly reduced downtime through proactive management',
			},
			{
				title: 'Enhanced Trust',
				description: 'Elevated guest safety scores and customer loyalty',
			},
		],
		href: '/who-we-serve/hospitality',
		accentColor: 'orange',
		gradient: 'from-orange-500 via-amber-500 to-yellow-500',
	},
	{
		title: 'Corporate Offices & IT Parks',
		description:
			'Creating safe, efficient, and sustainable workspaces. We empower productivity through optimized facility management.',
		challenges: [
			'Managing large-scale facility maintenance effectively',
			'Ensuring consistent employee health and safety standards',
			'Meeting complex sustainability reporting requirements',
		],
		valueDelivered: [
			{
				title: 'Audit Readiness',
				description: 'Always-on compliance systems for immediate reporting',
			},
			{
				title: 'Sustainability Impact',
				description: 'Measurable reduction in carbon footprint and waste',
			},
			{
				title: 'Resource Optimization',
				description: 'Intelligent allocation of resources to reduce overheads',
			},
		],
		href: '/who-we-serve/corporates',
		accentColor: 'blue',
		gradient: 'from-blue-500 via-indigo-500 to-purple-500',
	},
	{
		title: 'Healthcare & Institutions',
		description:
			'Maintaining critical standards for patient safety. Rigorous protocols ensuring the highest level of care.',
		challenges: [
			'Meeting critical hygiene and infection control standards',
			'Implementing rigorous infection control protocols',
			'Maintaining regulatory compliance at all times',
		],
		valueDelivered: [
			{
				title: 'Patient Safety',
				description: 'Enhanced safety protocols reducing infection risks',
			},
			{
				title: 'Compliance Standards',
				description: 'Full adherence to healthcare regulatory requirements',
			},
			{
				title: 'Reliable Execution',
				description: 'Consistent operational delivery across all facilities',
			},
		],
		href: '/who-we-serve/healthcare',
		accentColor: 'emerald',
		gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
	},
	{
		title: 'Education Campuses',
		description:
			'Building safe learning environments for students. Cost-effective solutions that promote wellbeing and sustainability.',
		challenges: [
			'Prioritizing student health and safety across campus',
			'Managing large-scale operations with limited resources',
			'Operating within tight budget constraints',
		],
		valueDelivered: [
			{
				title: 'Safe Environments',
				description: 'Protected learning spaces promoting student wellbeing',
			},
			{
				title: 'Cost-Effective Solutions',
				description: 'Maximum impact within educational budget limits',
			},
			{
				title: 'Sustainability Integration',
				description: 'Educational opportunities through green practices',
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

