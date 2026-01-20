import { JobsApiResponse, JobDetailApiResponse, JobListing, JobDetail } from './types';

// Get API base URL from environment variable at module level (so Next.js can replace it at build time)
// Next.js replaces process.env.NEXT_PUBLIC_* variables at build time for static exports
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

if (!API_BASE_URL) {
	console.error('NEXT_PUBLIC_API_URL is not set in environment variables');
	// Don't throw at module level, but log the error
}

// Helper function to build API endpoint URLs
const buildApiUrl = (endpoint: string): string => {
	if (!API_BASE_URL) {
		throw new Error('API URL is not configured. Please set NEXT_PUBLIC_API_URL in your environment variables.');
	}
	// Ensure endpoint starts with / to avoid double slashes
	const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
	return `${API_BASE_URL}${normalizedEndpoint}`;
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
	
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			// Add credentials for CORS if needed
			credentials: 'omit',
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('API Error:', response.status, errorText);
			throw new Error(`Failed to fetch jobs: ${response.status} ${response.statusText}`);
		}

		const data: JobsApiResponse = await response.json();
		return {
			jobs: data.data.jobs,
			pagination: data.data.pagination,
		};
	} catch (error) {
		console.error('Fetch error:', error);
		// Re-throw with more context
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error while fetching jobs');
	}
}

export async function fetchJobById(id: number): Promise<JobDetail> {
	const url = buildApiUrl(`/career/opportunities/${id}`);
	
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'omit',
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('API Error:', response.status, errorText);
			throw new Error(`Failed to fetch job details: ${response.status} ${response.statusText}`);
		}

		const data: JobDetailApiResponse = await response.json();
		return data.data;
	} catch (error) {
		console.error('Fetch error:', error);
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error while fetching job details');
	}
}

export async function fetchJobBySlug(slug: string): Promise<JobDetail> {
	const url = buildApiUrl(`/career/opportunities/slug/${slug}`);
	
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'omit',
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('API Error:', response.status, errorText);
			throw new Error(`Failed to fetch job details: ${response.status} ${response.statusText}`);
		}

		const data: JobDetailApiResponse = await response.json();
		return data.data;
	} catch (error) {
		console.error('Fetch error:', error);
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error while fetching job details');
	}
}
