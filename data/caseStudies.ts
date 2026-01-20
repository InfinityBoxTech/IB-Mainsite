import { LucideIcon, TrendingUp, Building2, CheckCircle2, Award, Zap, Target, DollarSign, Droplet, Leaf, Recycle, MapPin } from 'lucide-react';

export interface Metric {
  label: string;
  value: string;
  subValue?: string;
  unit?: string;
  icon: LucideIcon;
  color?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  location?: string;
  solution: string;
  description: string;
  challenge: string;
  approach?: string; // Some have approach, some have result text
  result?: string;
  primaryMetrics: Metric[];
  secondaryMetrics?: Metric[];
  impact?: string;
  gradient?: string;
  bgColor?: string;
  operationalScale?: Record<string, string>;
  infinityBoxInvestment?: string;
}

export const caseStudies: CaseStudy[] = [
  // From CaseStudiesSection.tsx (Detailed)
  {
    id: 'client-m',
    slug: 'client-m',
    title: 'Client M',
    industry: 'Global Technology / Services',
    location: 'Bangalore',
    solution: 'Offsite Centralized Dishwashing',
    description: 'Centralized offsite dishwashing operations delivering 30% OPEX reduction and significant Scope 2 & 3 emissions reduction.',
    challenge: 'High operational costs and rising Scope 2 & 3 emissions from inefficient decentralized dishwashing operations',
    result: 'Cost-efficient, centralized operations delivering measurable Scope 2 & 3 reduction',
    approach: 'Deployed centralized protocol management with real-time monitoring.',
    primaryMetrics: [
      {
        label: 'OPEX Reduction',
        value: '30%',
        subValue: 'INR 80 Lakhs annually',
        icon: DollarSign,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
      },
      {
        label: 'CO₂ Reduced',
        value: '200K+',
        subValue: 'kg annually (Scope 2 & 3)',
        icon: Leaf,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
      },
      {
        label: 'Water Saved',
        value: '900K',
        subValue: 'litres annually',
        icon: Droplet,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        borderColor: 'border-blue-200',
      },
    ],
    secondaryMetrics: [
      {
        label: 'Waste Reduced',
        value: '41,000',
        unit: 'kg',
        icon: Recycle,
      },
    ],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    id: 'client-c',
    slug: 'client-c',
    title: 'Client C',
    industry: 'Global Technology & Services',
    location: 'Pan India',
    solution: 'Pan-India Operations',
    description: 'Standardized pan-India offsite dishwashing operations across 13 locations, reducing costs and environmental impact at scale.',
    challenge: 'Maintaining hygiene and sustainability standards across 13 pan-India locations with high waste and water consumption',
    result: 'Scalable, compliant pan-India operations delivering measurable Scope 2 & 3 reduction',
    primaryMetrics: [
      {
        label: 'Cost Savings',
        value: '15%',
        subValue: 'INR 30 Lakhs annually',
        icon: DollarSign,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
      },
      {
        label: 'CO₂ Reduced',
        value: '140K',
        subValue: 'kg annually (Scope 2 & 3)',
        icon: Leaf,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200',
      },
      {
        label: 'Water Saved',
        value: '1.5M',
        subValue: 'litres annually',
        icon: Droplet,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        borderColor: 'border-blue-200',
      },
    ],
    secondaryMetrics: [
        {
            label: 'Waste Diverted',
            value: '100K+',
            unit: 'kg',
            icon: Recycle,
        },
    ],
    operationalScale: {
        locations: '13',
        employees: '25,000+',
        platesPerDay: '14,000',
        glassesPerDay: '50,000',
        pickupFrequency: 'Twice-daily',
    },
    infinityBoxInvestment: 'INR 25 Lakhs',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
  },

  // From page.tsx (Generic)
  {
    id: 'multi-site-hospitality',
    slug: 'multi-site-hospitality',
    title: 'Multi-Site Hospitality Chain',
    industry: 'Hospitality',
    solution: 'Hygiene Solutions',
    description: 'Standardized hygiene protocols across 25 locations, achieving 100% compliance and reducing operational costs by 22%.',
    challenge: 'Inconsistent hygiene standards across 25 properties leading to compliance risks and operational inefficiencies.',
    approach: 'Deployed centralized protocol management with real-time monitoring and staff training programs.',
    impact: 'Achieved complete compliance across all properties while significantly reducing costs through systematic standardization.',
    primaryMetrics: [
      { metric: '100%', label: 'Compliance Rate', icon: CheckCircle2 } as any,
      { metric: '22%', label: 'Cost Reduction', icon: TrendingUp } as any,
      { metric: '25', label: 'Locations Standardized', icon: Building2 } as any,
    ].map(m => ({
        label: m.label,
        value: m.metric,
        icon: m.icon,
        // Default styling for compatibility
        color: 'from-blue-600 to-cyan-600',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        borderColor: 'border-blue-200'
    })),
    gradient: 'from-blue-600 to-cyan-600',
    bgColor: 'from-blue-950 via-blue-900 to-cyan-950',
  },
  {
    id: 'corporate-it-park',
    slug: 'corporate-it-park',
    title: 'Corporate IT Park',
    industry: 'Corporate',
    solution: 'Integrated Solutions',
    description: 'Deployed integrated solutions across 2M sq ft, reducing waste by 35% and achieving LEED certification support.',
    challenge: 'Complex 2M sq ft facility requiring comprehensive waste management and sustainability compliance.',
    approach: 'Implemented integrated hygiene, packaging, and waste management systems with circular economy principles.',
    impact: 'Transformed facility operations to achieve sustainability goals while maintaining operational excellence.',
    primaryMetrics: [
      { metric: '35%', label: 'Waste Reduction', icon: TrendingUp } as any,
      { metric: 'LEED', label: 'Certification Support', icon: Award } as any,
      { metric: '2M', label: 'Sq Ft Coverage', icon: Building2 } as any,
    ].map(m => ({
        label: m.label,
        value: m.metric,
        icon: m.icon,
        color: 'from-emerald-600 to-teal-600',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        borderColor: 'border-emerald-200'
    })),
    gradient: 'from-emerald-600 to-teal-600',
    bgColor: 'from-emerald-950 via-emerald-900 to-teal-950',
  },
  {
    id: 'healthcare-network',
    slug: 'healthcare-network',
    title: 'Healthcare Facility Network',
    industry: 'Healthcare',
    solution: 'Compliance Systems',
    description: 'Established audit-ready documentation and protocols across 12 healthcare facilities, achieving zero compliance violations.',
    challenge: 'Critical need for stringent hygiene compliance and audit-ready documentation across medical facilities.',
    approach: 'Developed comprehensive compliance framework with digital tracking and automated reporting systems.',
    impact: 'Created a robust compliance infrastructure ensuring patient safety and regulatory adherence.',
    primaryMetrics: [
      { metric: '0', label: 'Compliance Violations', icon: CheckCircle2 } as any,
      { metric: '12', label: 'Facilities Covered', icon: Building2 } as any,
      { metric: '100%', label: 'Audit Success Rate', icon: Award } as any,
    ].map(m => ({
        label: m.label,
        value: m.metric,
        icon: m.icon,
        color: 'from-purple-600 to-pink-600',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-700',
        borderColor: 'border-purple-200'
    })),
    gradient: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-950 via-purple-900 to-pink-950',
  },
  {
    id: 'manufacturing-complex',
    slug: 'manufacturing-complex',
    title: 'Manufacturing Complex',
    industry: 'Industrial',
    solution: 'Workforce & Kitchen Solutions',
    description: 'Optimized workforce management and kitchen operations for 5,000+ employees, improving efficiency by 40%.',
    challenge: 'Managing large-scale workforce operations and cafeteria services for industrial facility.',
    approach: 'Integrated manpower solutions with commercial kitchen optimization and real-time monitoring.',
    impact: 'Streamlined operations delivering consistent service quality while maximizing workforce productivity.',
    primaryMetrics: [
      { metric: '40%', label: 'Efficiency Improvement', icon: Zap } as any,
      { metric: '5,000+', label: 'Employees Served', icon: Target } as any,
      { metric: '98%', label: 'Service Uptime', icon: TrendingUp } as any,
    ].map(m => ({
        label: m.label,
        value: m.metric,
        icon: m.icon,
        color: 'from-orange-600 to-red-600',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-700',
        borderColor: 'border-orange-200'
    })),
    gradient: 'from-orange-600 to-red-600',
    bgColor: 'from-orange-950 via-orange-900 to-red-950',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
