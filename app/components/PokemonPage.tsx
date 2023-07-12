'use client'

import { Pokemon } from "../interfaces";
import Link from "next/link";
import { colorSelector } from "../colors";
import { useState } from "react"
import nanoid from "nano-id"

export default function PokemonPage({ pokemon, pokemonEntry }: Pokemon) {
  const type = pokemon.types[0].type.name;

  const [color] = useState(colorSelector(type))

  const entryArray = pokemonEntry.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  const entry: { flavor_text: string } = entryArray.find(
    (entry) => !entry.flavor_text.includes("")
  );

  const abilityHidden = pokemon.abilities.find(
    (ability) => ability.is_hidden === true
  );

  const abilitySort = pokemon.abilities.filter(
    (ability) => ability.ability.name !== abilityHidden?.ability.name
  );

  return (
    <div className={color.background}>
      <Link className="block" href={"/"}>Go Back</Link>  
      <Link
        className={`${pokemon.id === 1 ? "hidden" : ""}`}
        href={`/${pokemon.id - 1}`}
      >
        Go to prev
      </Link>
      <h2>
        #
        {pokemon.id.toString().length === 1
          ? "00"
          : pokemon.id.toString().length === 2
          ? "0"
          : ""}
        {pokemon.id}
      </h2>
      <h1 className="capitalize">{pokemon.name.replace("-", " ")}</h1>
      {(pokemonEntry.flavor_text_entries.length as number) !== 0 && (
        <div>{entry.flavor_text}</div>
      )}

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div>
        {abilitySort.map((ability: { ability: { name: string } }) => (
          <h1 key={nanoid()} className="capitalize">
            {ability.ability.name.replace("-", " ")}
          </h1>
        ))}
        <h1 className="capitalize">
          {abilityHidden?.ability.name.replace("-", " ")}
        </h1>
      </div>
      <div>
        {pokemon.stats.map((stat) => (
            <div key={nanoid()}>
                <h2 className="capitalize">{stat.stat.name.replace("-", " ")}</h2>
                <h3>{stat.base_stat.toString().length === 1 ? "00" : stat.base_stat.toString().length === 2 ? "0" : ""}{stat.base_stat}</h3>
            </div>
        ))}
      </div>
      <Link
        className={`${pokemon.id === 1010 ? "hidden" : ""}`}
        href={`/${pokemon.id + 1}`}
      >
        Go to next
      </Link>
    </div>
  );
}
