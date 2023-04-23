import axios from 'axios'
import { useState } from 'react'
import { GlobalStyled } from './GlobalStyled'
import { AppContainer } from "./AppStyle"
import { BASE_URL } from "./constant/BASE_URL/BASE_URL"
import Router from "./routes/Router"


/* <!-- 

  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;

--> */

function App() {   
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeCard, setPokeCard] = useState('list')

 

  const getAllPokemon = async () => {
    try {
        const response = await 
        axios.get(`${BASE_URL}pokemon?limit=81&offset=0`)
        //console.log(response.data) 
        setPokemonList(response.data.results)
    } catch (error) {
        //console.log(error.response)
    }
  }

  

  const catchPokemon = (caughtPokemon) => {
    setPokedex([... pokedex, caughtPokemon]);
    filterPokemonList(caughtPokemon)
  }

  const filterPokemonList = (removePokemon) => {
    const pokemonFiltered = pokemonList.filter(pokemon => {
      if(pokemon.name !== removePokemon.name) return pokemon
    }) 
    console.log(pokemonFiltered)
    setPokemonList(pokemonFiltered)
  }

  


  return (
    <AppContainer>
      <GlobalStyled/>
      <Router 
        pokemonList={pokemonList} 
        getAllPokemon={getAllPokemon}
        catchPokemon={catchPokemon}
        pokeCard={pokeCard}
        setPokeCard={setPokeCard}
        pokedex={pokedex}
        
      />
    </AppContainer>
    
  )
}

export default App
