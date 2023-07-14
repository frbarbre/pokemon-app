import FrontPage from "./components/FrontPage";

export default async function Home() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species?limit=1000000&offset=0`
  );
  const res = await data.json();

  
  // const pokemonArray = res.map((data: { name: string; url: string; dex: number }) => {
  //   const split = data.url.split("/");
  //   const dexNumber = parseInt(split[6]);
    
  //   return ({
  //     ...data,
  //     dex: dexNumber,
  //   });
  // });

  return <FrontPage pokemonData={res.results} />;
}
