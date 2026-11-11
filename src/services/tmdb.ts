import type { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` },
  });

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao acessar a API`);
  }

  return response.json() as Promise<T>;
}

export function getPopularMovies(page = 1) {
  return request<MoviesResponse>(`/movie/popular?language=pt-BR&page=${page}`);
}