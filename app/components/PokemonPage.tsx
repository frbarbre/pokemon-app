"use client";

import { Pokemon } from "../interfaces";
import Link from "next/link";
import { colorSelector } from "../colors";
import { useState } from "react";
import nanoid from "nano-id";

export default function PokemonPage({ pokemon, pokemonEntry }: Pokemon) {
  const type = pokemon.types[0].type.name;

  const [color] = useState(colorSelector(type));

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
    <div className={`${color.background} min-h-screen`}>
      <div className="max-w-[745px] mx-auto py-8 px-1 relative">
        <div className="bg-pokeball bg-no-repeat bg-right-top w-[208px] h-[208px] bg-contain absolute top-4 right-4 md:right-[50%] md:translate-x-[50%]" />
        <div className="flex justify-between items-center pb-[24px] px-7">
          <div className="flex items-center gap-[8px]">
            <Link className="block" href={"/"}>
              <img
                className="w-[32px] aspect-square"
                src="/arrow_back.png"
                alt="arrow back"
              />
            </Link>
            <h1 className="capitalize text-white font-bold text-[24px] leading-[32px]">
              {pokemon.name.replace("-", " ")}
            </h1>
          </div>
          <h2 className="text-white font-bold text-[12px] leading-[16px]">
            #
            {pokemon.id.toString().length === 1
              ? "00"
              : pokemon.id.toString().length === 2
              ? "0"
              : ""}
            {pokemon.id}
          </h2>
        </div>

        <div className="bg-white flex flex-col mt-[145px] relative z-10 rounded-[8px] shadow-inner-2dp items-center gap-4">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
            className="mt-[-145px] w-[200px] object-contain mx-auto"
          />
          <div className="absolute top-[-50px] flex justify-between left-7 right-7">
            <div>
              <Link
                className={`${pokemon.id === 1 ? "hidden" : ""}`}
                href={`/${pokemon.id - 1}`}
              >
                <img
                  className="w-[30px] object-contain"
                  src="chevron_left.png"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link
                className={`${pokemon.id === 1010 ? "hidden" : ""}`}
                href={`/${pokemon.id + 1}`}
              >
                <img
                  className="w-[30px] object-contain"
                  src="chevron_right.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-[16px]">
            {pokemon.types.map((type) => {
              return (
                <div
                  className={`bg-${type.type.name} w-max rounded-full py-[2px] px-[8px] capitalize text-white font-bold text-[10px] leading-[16px]`}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <h2 className={`${color.text} text-[14px] font-bold leading-[16px]`}>
            About
          </h2>
          <div className="flex justify-between w-full max-w-[745px] mx-auto">
            <div className="flex flex-col gap-[12px] min-w-[103px] flex-1 items-center">
              <h2 className="text-medium text-[8px] text-center">Weight</h2>
              <div className="flex items-center gap-[8px]">
                <p className="text-[10px] leading-[16px] text-darker">
                  {pokemon.weight / 10} kg
                </p>
                <img
                  src="/weight.png"
                  alt="weight"
                  className="w-[16px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[12px] min-w-[103px] flex-1 items-center border-x-solid border-x-[2px] border-x-light">
              <h2 className="text-medium text-[8px] text-center">Height</h2>
              <div className="flex items-center gap-[8px]">
                <img
                  src="/straighten.png"
                  alt="height"
                  className="w-[16px] object-contain"
                />
                <p className="text-[10px] leading-[16px] text-darker">
                  {pokemon.height / 10} m
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[12px] min-w-[103px] flex-1 justify-between items-center">
              <h2 className="text-medium text-[8px] text-center">Abilities</h2>
              <ul className="flex items-center gap-[3px] gap-x-[12px] flex-col md:flex-row">
                {abilitySort.map((ability) => (
                  <li
                    key={nanoid()}
                    className="text-[10px] leading-[16px] text-darker capitalize"
                  >
                    {ability.ability.name.replace("-", " ")}
                  </li>
                ))}
                <li className="text-[10px] leading-[16px] text-darker capitalize">
                  {abilityHidden?.ability.name.replace("-", " ")}
                </li>
              </ul>
            </div>
          </div>

          {(pokemonEntry.flavor_text_entries.length as number) !== 0 && (
            <div className="max-w-[600px] leading-[16px] mx-auto text-[10px] px-[20px]">
              {entry.flavor_text}
            </div>
          )}

          <h2 className={`${color.text} text-[14px] font-bold leading-[16px]`}>
            Base Stats
          </h2>

          <div className="w-full px-[20px] max-w-[600px] mx-auto pb-[20px]">
            {pokemon.stats.map((stat) => {
              const statPercent = (stat.base_stat / 255) * 100;
              const width = `${statPercent.toFixed(0)}%`;

              return (
                <div
                  key={nanoid()}
                  className="flex items-center gap-[8px] w-full"
                >
                  <div className="flex justify-between items-center gap-[8px]">
                    <h2
                      className={`uppercase text-right w-[27px] text-[10px] font-bold leading-[16px] ${color.text}`}
                    >
                      {stat.stat.name === "attack"
                        ? "atk"
                        : stat.stat.name === "defense"
                        ? "def"
                        : stat.stat.name === "special-attack"
                        ? "satk"
                        : stat.stat.name === "special-defense"
                        ? "sdef"
                        : stat.stat.name === "speed"
                        ? "spd"
                        : stat.stat.name}
                    </h2>
                    <hr className="w-[1px] bg-light h-[16px]" />
                    <h3 className="w-[19px] text-[10px] text-darker leading-[16px] text-right">
                      {stat.base_stat.toString().length === 1
                        ? "00"
                        : stat.base_stat.toString().length === 2
                        ? "0"
                        : ""}
                      {stat.base_stat}
                    </h3>
                  </div>
                  <div className={`flex-1 rounded-full`}>
                    <div style={{width: width}} className={`${color.background} h-[4px] rounded-full`} />
                    <div className={`${color.background} opacity-25 h-[4px] rounded-full w-full mt-[-4px]`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
