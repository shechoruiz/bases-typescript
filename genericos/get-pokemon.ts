import axios from "axios";
import { Pokemon } from "./interfaces";

const getPokemon = async (pokemonId: number) => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return data;
};

// getPokemon(1)
//   .then((resp) => console.log(resp))
//   .catch((error) => console.error(error));

export default getPokemon;
