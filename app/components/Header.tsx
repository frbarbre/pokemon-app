import Image from "next/image";

export default function Header({ handleClick }) {
  return (
    <article
      className="flex items-center gap-[16px] p-[16px] pb-[8px] cursor-pointer"
      onClick={handleClick}
    >
      <Image
        width={200}
        height={200}
        src="/pokeball-white.png"
        alt="logo"
        className="w-[24px] aspect-square"
      />
      <h1 className="font-bold text-[24px] text-white">Pokédex</h1>
    </article>
  );
}
