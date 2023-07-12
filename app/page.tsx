import FrontPage from "./components/FrontPage";

export default async function Home() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species?limit=1000000&offset=0`
  );
  const res = await data.json();

  return <FrontPage pokemonData={res.results} />;
}
