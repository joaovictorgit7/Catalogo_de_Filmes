import { useEffect, useState } from "react";

function App() {
  const [titulos, setTitulos] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTitulos(data.results.map((f: { title: string }) => f.title)));
  }, []);

  return (
    <ul>
      {titulos.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default App;