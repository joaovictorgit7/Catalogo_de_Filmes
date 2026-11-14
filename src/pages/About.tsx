interface Member {
  name: string;
  components: string[];
}

const members: Member[] = [
  { name: "Integrante 1", components: ["Header", "SearchBar"] },
  { name: "Integrante 2", components: ["MovieCard", "MovieGrid"] },
  { name: "Integrante 3", components: ["MovieDetails", "FavoriteButton"] },
  { name: "Integrante 4", components: ["Pagination", "StatusMessage"] },
];

const technologies = ["React", "TypeScript", "Vite", "React Router", "API do TMDB"];

function About() {
  return (
    <main className="about">
      <h1>Sobre o projeto</h1>
      <p>
        Catálogo de Filmes desenvolvido para a disciplina de Front-end
        Frameworks. O app consome a API do TMDB para listar filmes populares,
        buscar por título, ver detalhes e salvar favoritos.
      </p>

      <h2>Tecnologias</h2>
      <ul className="about__tags">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h2>Equipe</h2>
      <ul className="about__members">
        {members.map((member) => (
          <li key={member.name}>
            <strong>{member.name}</strong>
            <span>{member.components.join(" e ")}</span>
          </li>
        ))}
      </ul>

      <p className="about__credit">
        Este produto usa a API do TMDB, mas não é endossado ou certificado pelo
        TMDB.
      </p>
    </main>
  );
}

export default About;