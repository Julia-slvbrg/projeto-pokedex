import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import PokemonListPage from './Pages/PokemonListPage/PokemonListPage'
import PokedexPage from './Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage'
import { GlobalStyled } from './GlobalStyled'
import { AppContainer } from "./AppStyle"
import { BASE_URL } from "./constant/BASE_URL/BASE_URL"
import Router from "./routes/Router"

function App() {
 
    
  const [pokemonList, setPokemonList] = useState([])


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

 

  return (
    <AppContainer>
      <GlobalStyled/>
      
      <Router 
        pokemonList={pokemonList} 
        getAllPokemon={getAllPokemon}
      
      />

    </AppContainer>
    
  )
}

export default App
