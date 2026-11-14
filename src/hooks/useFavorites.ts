import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";

const STORAGE_KEY = "catalogo-filmes:favoritos";
const EVENT_NAME = "favoritos-atualizados";

function readFavorites(): Movie[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Movie[]) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>(readFavorites);

  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    window.addEventListener(EVENT_NAME, sync);

    return () => window.removeEventListener(EVENT_NAME, sync);
  }, []);

  function isFavorite(id: number) {
    return favorites.some((movie) => movie.id === id);
  }

  function toggleFavorite(movie: Movie) {
    const current = readFavorites();
    const next = current.some((item) => item.id === movie.id)
      ? current.filter((item) => item.id !== movie.id)
      : [...current, movie];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      return;
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }

  return { favorites, isFavorite, toggleFavorite };
}