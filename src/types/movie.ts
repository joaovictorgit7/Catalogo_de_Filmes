export interface MoviesResponse {
  page: number;           // página atual
  results: Movie[];       // lista de filmes
  total_pages: number;    // quantas páginas existem
  total_results: number;  // total de filmes
}

// Movie não guarda os dados dos filmes, ele descreve o formato deles. Os dados de verdade vêm da API do TMDB, e o Movie diz como cada filme é: quais campos tem e de que tipo.
export interface Movie {
  id: number;                  // identificador único do filme
  title: string;               // nome do filme
  overview: string;            // sinopse
  poster_path: string | null;  // caminho do pôster, ou null se não houver
  release_date: string;        // data como texto, "1999-10-15"
  vote_average: number;        // nota, como 8.4
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetail extends Movie {
  runtime: number | null;
  genres: Genre[];
  tagline: string;
}