import { JobsApiResponse, JobDetailApiResponse, JobListing, JobDetail } from './types';

// Get API base URL from environment variable
const getApiBaseUrl = (): string => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	if (!apiUrl) {
		console.error('NEXT_PUBLIC_API_URL is not set in environment variables');
		throw new Error('API URL is not configured. Please set NEXT_PUBLIC_API_URL in your environment variables.');
	}
	// Remove trailing slash if present to normalize the URL
	return apiUrl.replace(/\/$/, '');
};

// Helper function to build API endpoint URLs
const buildApiUrl = (endpoint: string): string => {
	const apiBaseUrl = getApiBaseUrl();
	// Ensure endpoint starts with / to avoid double slashes
	const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
	return `${apiBaseUrl}${normalizedEndpoint}`;
};

export async function fetchJobs(params?: {
	page?: number;
	limit?: number;
	department?: string;
	search?: string;
}): Promise<{ jobs: JobListing[]; pagination: JobsApiResponse['data']['pagination'] }> {
	const searchParams = new URLSearchParams();
	searchParams.set('is_active', 'true');

	if (params?.page) searchParams.set('page', params.page.toString());
	if (params?.limit) searchParams.set('limit', params.limit.toString());
	if (params?.department && params.department !== 'All') {
		searchParams.set('department', params.department);
	}
	if (params?.search) searchParams.set('search', params.search);

	const url = buildApiUrl(`/career/opportunities?${searchParams.toString()}`);
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch jobs');
	}

	const data: JobsApiResponse = await response.json();
	return {
		jobs: data.data.jobs,
		pagination: data.data.pagination,
	};
}

export async function fetchJobById(id: number): Promise<JobDetail> {
	const url = buildApiUrl(`/career/opportunities/${id}`);
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch job details');
	}

	const data: JobDetailApiResponse = await response.json();
	return data.data;
}

export async function fetchJobBySlug(slug: string): Promise<JobDetail> {
	const url = buildApiUrl(`/career/opportunities/slug/${slug}`);
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch job details');
	}

	const data: JobDetailApiResponse = await response.json();
	return data.data;
}
