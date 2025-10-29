import { Movie } from '../types/movie';
import { apiRequest, RequestOptions } from './ApiRequest';

export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovies = async (): Promise<Movie[]> => {
  return apiRequest('movies/featured');
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movie[]> => {
  return apiRequest(
    `movies`,
    { genres_like: encodeURIComponent(genre) },
    options
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options?: RequestOptions
): Promise<Movie[]> => {
  return apiRequest(
    `movies`,
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options
  );
};
