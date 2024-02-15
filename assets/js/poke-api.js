const pokeApi = {};
pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limite=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.results)
    .catch((error) => console.log(error));
};
