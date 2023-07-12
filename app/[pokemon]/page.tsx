import PokemonPage from "../components/PokemonPage"

export default async function Pokemon({params}) {

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
    const res = await data.json()

    const entryData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemon}`)
    const entryRes = await entryData.json()

    return (
        <PokemonPage pokemon={res} pokemonEntry={entryRes} />
    )
}