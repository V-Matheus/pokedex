console.log('ok');

const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limite=${limit}`;

fetch(url).then((response) =>
  response.json().then((json) => console.log(json)),
);
