export interface PokemonSpecie {
  name: string;
  url: string;
}

export interface PokemonData {
  pokemonData: [
    {
      name: string;
      url: string;
      dex: string;
    }
  ];
}

export interface Pokemon {
  pokemon: {
    abilities: [
      {
        ability: {
          name: string;
        };
        is_hidden: boolean;
      }
    ];
    height: number;
    id: number;
    name: string;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    stats: [
      {
        base_stat: number;
        stat: {
          name: string;
        };
      }
    ];
    types: [
      {
        slot: number;
        type: {
          name: string;
        };
      }
    ];
    weight: number;
  };
  pokemonEntry: {
    flavor_text_entries: [
      {
        flavor_text: string;
        language: {
          name: string;
        };
      }
    ];
  };
}

export interface PokemonCard {
  dexNumber: string;
  pokemon: { name: string; url: string };
}

export interface SearchProps {
  value: string;
  isWriting: boolean;
  setIsWriting: (isWriting: boolean) => void;
  sortValue: "number" | "letter";
  setSortValue: (sortValue: "number" | "letter") => void;
  sortBtn: boolean;
  setSortBtn: (sortBtn: boolean) => void;
  handleSubmit: (e: any) => void;
  handleClick: () => void;
  handleChange: (e: any) => void;
}
