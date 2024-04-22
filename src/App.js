import React,{ useEffect, useState } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({ weight: 0, height:0,sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
          cries:{latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg'}}); 
  const [poke, setPoke] = useState();

  async function loadAPI() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
      const response = await fetch(url);
      const json = await response.json();

      setPokemon(json);
      console.log(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



  



  return (
    <div className='container'>
      <header>
        <strong>Pokedex</strong>
      </header>


      <div>
        <input type="text" onChange={(e) => setPoke(e.target.value)} />
        <button onClick={loadAPI}>Pesquisar</button>
        <div className='none'>
          <div>ID: {pokemon.id}</div>
          <div>Nome: {pokemon.name}</div>
          <div>Altura: {pokemon.height/10}</div>
          <div>Peso: {pokemon.weight/10}</div>
          <div id='imagem'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div >
            <audio autoPlay src={pokemon.cries.latest}></audio>
          </div>
        </div>
        
      </div>
    </div>
  );
}


export default App;
