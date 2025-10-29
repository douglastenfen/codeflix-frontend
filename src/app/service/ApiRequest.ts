const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export function buildQueryString(params: QueryParams): string {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);

  return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function apiRequest(
  endpoint: string,
  query: QueryParams = {},
  options: RequestOptions = {}
) {
  const mergedOptions: RequestOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryString = buildQueryString({ ...query, ...mergedOptions });

  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
