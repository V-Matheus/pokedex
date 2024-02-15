const pokeApi = {};

pokeApi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limite=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((requests) => Promise.all(requests))
    .then((pokemonDetails) => pokemonDetails);
};
