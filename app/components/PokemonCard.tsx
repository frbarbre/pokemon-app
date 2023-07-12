import Link from "next/link";
import Image from "next/image";
import { PokemonCard } from "../interfaces";

export default function PokemonCard({ dexNumber, pokemon }: PokemonCard) {
  return (
    <Link href={`/${dexNumber}`}>
      <div className="w-[104px] h-[108px] flex flex-col border-white shadow-2dp items-center justify-between rounded-[7px] py-[4px] hover:shadow-inner-2dp transition-all">
        <h3 className="text-[8px] text-medium self-end pr-[8px]">#{dexNumber.length === 1 ? "00" : dexNumber.length === 2 ? "0" : ""}{dexNumber}</h3>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexNumber}.png`}
          alt={pokemon.name}
          width={72}
          height={72}
        />
        <h2 className="capitalize text-[10px]">{pokemon.name.replace("-", " ")}</h2>
      </div>
    </Link>
  );
}
