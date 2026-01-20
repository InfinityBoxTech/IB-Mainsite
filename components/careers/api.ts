import { JobsApiResponse, JobDetailApiResponse, JobListing, JobDetail } from './types';

// Base URL already includes /v1/api/ so we append /career/opportunities
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

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

	const response = await fetch(`${API_BASE_URL}/career/opportunities?${searchParams.toString()}`);

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
	const response = await fetch(`${API_BASE_URL}/career/opportunities/${id}`);

	if (!response.ok) {
		throw new Error('Failed to fetch job details');
	}

	const data: JobDetailApiResponse = await response.json();
	return data.data;
}

export async function fetchJobBySlug(slug: string): Promise<JobDetail> {
	const response = await fetch(`${API_BASE_URL}/career/opportunities/slug/${slug}`);

	if (!response.ok) {
		throw new Error('Failed to fetch job details');
	}

	const data: JobDetailApiResponse = await response.json();
	return data.data;
}
