// API Response Types
export interface JobDescription {
	overview?: string;
	paragraphs?: string[];
	salary?: {
		min?: number;
		max?: number;
		currency?: string;
		period?: string;
		display?: string;
	};
	requirements?: string[];
	responsibilities?: string[];
	benefits?: string[];
	qualifications?: {
		required?: string[];
		preferred?: string[];
	};
}

export interface JobListing {
	id: number;
	title: string;
	slug: string;
	department: string | null;
	job_type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
	location: string | null;
	is_remote: boolean;
	is_active: boolean;
	is_featured: boolean;
	published_at: string | null;
	expires_at: string | null;
	salary_min: number | null;
	salary_max: number | null;
	salary_currency: string;
	experience_level: 'entry' | 'mid' | 'senior' | 'executive' | null;
	view_count: number;
	application_count: number;
	categories: string[];
	created_at: string;
	updated_at: string;
}

export interface JobDetail extends JobListing {
	description: JobDescription;
	application_email: string | null;
	application_url: string | null;
	application_deadline: string | null;
	meta_title: string | null;
	meta_description: string | null;
	meta_keywords: string | null;
	category_ids: number[];
	category_names: string[];
}

export interface JobsApiResponse {
	status: string;
	status_code: number;
	data: {
		jobs: JobListing[];
		pagination: {
			page: number;
			limit: number;
			total: number;
			totalPages: number;
		};
	};
}

export interface JobDetailApiResponse {
	status: string;
	status_code: number;
	data: JobDetail;
}

export type Department = 'All' | string;

// Helper to format job type for display
export const formatJobType = (jobType: string): string => {
	const typeMap: Record<string, string> = {
		'full-time': 'Full-Time',
		'part-time': 'Part-Time',
		contract: 'Contract',
		internship: 'Internship',
		freelance: 'Freelance',
	};
	return typeMap[jobType] || jobType;
};

// Helper to format experience level for display
export const formatExperienceLevel = (level: string | null): string => {
	if (!level) return 'Not specified';
	const levelMap: Record<string, string> = {
		entry: 'Entry Level',
		mid: 'Mid Level',
		senior: 'Senior Level',
		executive: 'Executive Level',
	};
	return levelMap[level] || level;
};
