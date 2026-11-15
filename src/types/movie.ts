// Nesse arquivos, definimos os tipos de dados que serão utilizados em nosso projeto, relacionados a filmes e suas informações.

export interface MoviesResponse {
  page: number;           // página atual
  results: Movie[];       // lista de filmes
  total_pages: number;    // quantas páginas existem
  total_results: number;  // total de filmes
}

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