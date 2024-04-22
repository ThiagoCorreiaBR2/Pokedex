import React,{ useEffect, useState } from 'react';
import './style.css';

function App() {

  const [pokemon, setPokemon] = useState({weight: 0, height: 0});
  const [poke, setpoke] = useState();
  
  function loadAPI() {
    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;    //pega o url
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


// Call the async function
useEffect(() => {
  loadAPI();
}, []);


  return (
    <div className='container'>
      <header>
        <strong>Pokedex</strong>
      </header>


      <div>
        <input type="text" onChange={(e) => setpoke(e.target.value)} />
        <button onClick={loadAPI}>Pesquisar</button>
        <div className='none'>
          <div>ID: {pokemon.id}</div>
          <div>Nome: {pokemon.name}</div>
          <div>Altura: {pokemon.height/10}</div>
          <div>Peso: {pokemon.weight/10}</div>
          <div>
          </div>
          <div >
            
          </div>
        </div>
        
      </div>
    </div>
  );
}


export default App;
