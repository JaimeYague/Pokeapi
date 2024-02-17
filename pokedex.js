/*
function process(data){
    console.log(data);
    document.querySelector('ol').append(document.createTextNode(data.count));

    fetch(data.results[15].url)
        .then((response) => response.json())
        .then((result) => {
            const pokemon = {
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
            };
        

        console.log(pokemon);
    });

    fetch(data.next)
        .then((data) => data.json())
        .then(data => console.log(data));

    for (let i = 1; i <=150; i++) {
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    }
}
    
            
fetch('https://pokeapi.co/api/v2/pokemon')
.then (data => data.json())
.then (process);

*/

/*
GPT:

// Obtener la lista con el id "podekex" y almacenarla en una variable
const pokemonList = document.getElementById('podekex');

// Función para realizar el fetch de los primeros 150 Pokémon
function fetchPokemon() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
  // Función auxiliar para manejar la lógica del fetch
  function fetchPokemonData(i) {
    return fetch(`${baseUrl}${i}`)
      .then(response => {
        if (!response.ok) {
          console.error(`Error fetching Pokémon ${i}`);
          throw new Error(`Error fetching Pokémon ${i}`);
        }
        return response.json();
      })
      .then(pokemonData => {
        // Mapear e imprimir los parámetros
        const pokemon = {
          name: pokemonData.name,
          image: pokemonData.sprites['front_default'],
          type: pokemonData.types.map(type => type.type.name).join(', '),
          id: pokemonData.id
        };
        console.log(pokemon);
      })
      .catch(error => {
        console.error(error);
      });
  }



  // Bucle for para realizar las solicitudes de forma secuencial
  for (let i = 1; i <= 150; i++) {
    fetchPokemonData(i);
  }
}

// Llamar a la función para iniciar la recuperación de datos
fetchPokemon();

*/

/*GPT enviando a html:

// pokedex.js

// Obtener la lista con el id "pokedex" y almacenarla en una variable
const pokedexList = document.getElementById('pokedex');

// Función para realizar el fetch de los primeros 150 Pokémon
function fetchPokemon() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
  function fetchPokemonData(i) {
    return fetch(`${baseUrl}${i}`)
      .then(response => {
        if (!response.ok) {
          console.error(`Error fetching Pokémon ${i}`);
          throw new Error(`Error fetching Pokémon ${i}`);
        }
        return response.json();
      })
      .then(pokemonData => {
        // Crear un elemento li para cada Pokémon
        const listItem = document.createElement('li');
        
        // Mapear e imprimir los parámetros y agregar al elemento li
        listItem.innerHTML = `
          <span>${pokemonData.id}</span>
          <img src="${pokemonData.sprites['front_default']}" alt="${pokemonData.name}" />
          <h2>${pokemonData.name}</h2>
          <p>Type: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        `;
        
        // Agregar el elemento li al ul
        pokedexList.appendChild(listItem);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Bucle for para realizar las solicitudes de forma secuencial
  for (let i = 1; i <= 150; i++) {
    fetchPokemonData(i);
  }
}

// Llamar a la función para iniciar la recuperación de datos
fetchPokemon();

*/

/*
GPT con asincronia
*/

// Obtener la lista con el id "pokedex" y almacenarla en una variable
const pokedexList = document.getElementById('pokedex');

// Función para realizar el fetch de los primeros 150 Pokémon
async function fetchPokemon() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
  async function fetchPokemonData(i) {
    try {
      const response = await fetch(`${baseUrl}${i}`);
      if (!response.ok) {
        console.error(`Error fetching Pokémon ${i}`);
        throw new Error(`Error fetching Pokémon ${i}`);
      }
      const pokemonData = await response.json();

      // Convertir la primera letra del nombre a mayúscula
      const capitalizedPokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

      // Crear un elemento li para cada Pokémon
      const listItem = document.createElement('li');
      
      // Mapear e imprimir los parámetros y agregar al elemento li
      listItem.innerHTML = `
        <img src="${pokemonData.sprites['front_default']}" alt="${pokemonData.name}" />
        <h2>${capitalizedPokemonName}</h2>
        
        <span>ID:${pokemonData.id}</span>
        <p>Type: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        
      `;
      
      // Agregar el elemento li al ul
      pokedexList.appendChild(listItem);
    } catch (error) {
      console.error(error);
    }
  }

  // Bucle for para realizar las solicitudes de forma secuencial
  for (let i = 1; i <= 150; i++) {
    await fetchPokemonData(i);
  }
}

// Llamar a la función para iniciar la recuperación de datos
fetchPokemon();