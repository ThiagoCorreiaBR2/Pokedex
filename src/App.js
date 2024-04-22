import React,{ useEffect, useState } from 'react';
import './style.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  function loadAPI() {
    let url = 'https://pokeapi.co/api/v2/pokemon/pikachu';    //pega o url
    fetch(url)    //dropa no fetch
    .then(response => response.json())    //larga oresultado do fetch na variavel response
    .then(json=> {
      setPokemon(json);
      console.log(json)
    })

    .catch(error => console.log(error))
  }
  useEffect(() => {
    loadAPI();
  }, []);
  
  return (
    <div className='container'>
      <header>
        <strong>Pokedex</strong>
      </header>


      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>Nome: {pokemon.name}</div>
        <div>Altura: {pokemon.height/10}</div>
        <div>Peso: {pokemon.weight/10}</div>
      </div>
    </div>
  );
}


export default App;