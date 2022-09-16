import getPokemon from "./genericos/get-pokemon";

getPokemon(1)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.error(error));
