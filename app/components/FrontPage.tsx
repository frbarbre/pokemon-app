"use client";

import { PokemonSpecie, PokemonData } from "../interfaces";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import { use, useState } from "react";
import nanoid from "nano-id";

export default function FrontPage({ pokemonData }: PokemonData) {
  const [value, setValue] = useState("");
  const [data, setData] = useState(pokemonData);
  const [searchData, setSearchedData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (value.length < 3) {
      console.log("need to inclunde at least three characters");
    } else {
      setSearchedData(data.filter((data) => data.name.includes(value.toLowerCase())));
      setIsSearching(true);
      setSubmitted(true);
    }
  }

  function handleClick() {
    setValue("");
    setIsWriting(false);
    setIsSearching(false);
    setSubmitted(false);
  }

  return (
    <main className="bg-primary p-4 min-h-screen">
      <Header handleClick={handleClick} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search after a pokemon"
          onFocus={() => setIsWriting(true)}
          onBlur={() => setIsWriting(false)}
        />
      </form>
      {isWriting === false && isSearching === false ? (
        <div className="flex flex-wrap gap-2 shadow-inner-2dp bg-white rounded-[8px] justify-center px-[12px] py-[24px]">
          {data.map((pokemon: PokemonSpecie) => {
            const urlSplit = pokemon.url.split("/");
            const dexNumber = urlSplit[6];

            return (
              <PokemonCard
                key={nanoid()}
                dexNumber={dexNumber}
                pokemon={pokemon}
              />
            );
          })}
        </div>
      ) : submitted === false ? (
        <div className="bg-white">Search for a pokemon</div>
      ) : null}
      {isSearching === true && (
        <div className="flex flex-wrap gap-2 shadow-inner-2dp bg-white rounded-[8px] justify-center px-[12px] py-[24px]">
          {searchData.map((pokemon: PokemonSpecie) => {
            const urlSplit = pokemon.url.split("/");
            const dexNumber = urlSplit[6];

            return (
              <PokemonCard
                key={nanoid()}
                dexNumber={dexNumber}
                pokemon={pokemon}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
