import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const [movies, setMovies] = useState();

  return (
    <div>
      <Seo title={"Home"} />
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return { props: { results } };
}
