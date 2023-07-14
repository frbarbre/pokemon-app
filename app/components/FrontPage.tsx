"use client";

import { PokemonSpecie, PokemonData } from "../interfaces";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import { useState } from "react";
import nanoid from "nano-id";
import Search from "./Search";

export default function FrontPage({ pokemonData }: PokemonData) {
  const [value, setValue] = useState("");
  const [data] = useState(pokemonData);
  const [searchData, setSearchedData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sortValue, setSortValue] = useState<"number" | "letter">("number");
  const [sortBtn, setSortBtn] = useState(false);

  const newArray = data.map((data) => {
    const split = data.url.split("/");
    const dexNumber = parseInt(split[6]);

    return {
      ...data,
      dex: dexNumber,
    };
  });

  if (sortValue === "number") {
    newArray.sort(function (a, b) {
      if (a.dex < b.dex) {
        return -1;
      }
      if (a.dex > b.dex) {
        return 1;
      }
      return 0;
    });

    searchData.sort(function (a, b) {
      if (a.dex < b.dex) {
        return -1;
      }
      if (a.dex > b.dex) {
        return 1;
      }
      return 0;
    });
  } else if (sortValue === "letter") {
    newArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    searchData.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (value.length < 2) {
      console.log("need to include at least two characters");
    } else {
      setSearchedData(
        newArray.filter((data) => data.name.includes(value.toLowerCase()))
      );
      setIsSearching(true);
      setSubmitted(true);
      console.log(searchData);
    }
  }

  function handleClick() {
    setValue("");
    setIsWriting(false);
    setIsSearching(false);
    setSubmitted(false);
  }

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <main className="bg-primary p-4 min-h-screen">
      <Header handleClick={handleClick} />
      <Search
        value={value}
        isWriting={isWriting}
        setIsWriting={setIsWriting}
        sortValue={sortValue}
        setSortValue={setSortValue}
        sortBtn={sortBtn}
        setSortBtn={setSortBtn}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      {isWriting === false && isSearching === false ? (
        <div className="flex flex-wrap gap-2 shadow-inner-2dp bg-white rounded-[8px] justify-center px-[12px] py-[24px]">
          {newArray.map((pokemon: PokemonSpecie) => {
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
        <div className="bg-white min-h-calcHeight text-center rounded-[8px] shadow-inner-2dp flex justify-center items-center flex-col gap-10">
          <div className="text-[18px] font-bold text-center px-8">
            {value.length === 0 ? (
              <p>
                You need <span className="text-primary">2</span> more characters
                to search
              </p>
            ) : value.length === 1 ? (
              <p>
                You need <span className="text-primary">1</span> more character
                to search
              </p>
            ) : (
              <div>
                Press <span className="text-primary">enter</span> to show
                results for: {value}
              </div>
            )}
          </div>
          <img
            className="max-w-[350px] w-full mx-auto"
            src="/red-pc.webp"
            alt="decorative pokemon photo"
          />
        </div>
      ) : null}
      {isSearching === true && searchData.length !== 0 ? (
        <div className=" shadow-inner-2dp bg-white rounded-[8px] px-[12px] py-[24px] min-h-calcHeight">
          <div className="flex flex-wrap gap-2 items-start justify-center">
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
        </div>
      ) : submitted ? (
        <div className="shadow-inner-2dp bg-white rounded-[8px] px-[12px] py-[24px] min-h-calcHeight flex items-center justify-center flex-col gap-10">
          <p className="text-center font-bold text-[18px] px-8">
            <span className="text-primary">"{value}"</span> is not a Pokémon
          </p>
          <img
            className="max-w-[350px] w-full mx-auto"
            src="/confused.png"
            alt="psyduck"
          />
        </div>
      ) : null}
    </main>
  );
}
