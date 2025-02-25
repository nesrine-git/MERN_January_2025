import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])
      
  useEffect (()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
      console.log(response.data.results)
       // ✅ Use results instead of data
       // !!!(response.data is an object, we need to extract results, which is the array of Pokémon.)
      setPokemon(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className='container d-flex flex-column align-items-center gap-5 p-4'>
        <h1>Pokemon API </h1>
          <ul>
            {pokemon.map((pok, index) => (
              <li key={index}>{pok.name}</li>
            ))}
          </ul>
    </div>
  )
}

export default App
