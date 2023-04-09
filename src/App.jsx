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
 
  const [changePage, setChangePage] = useState("PokemonList")  
  const [pokemonList, setPokemonList] = useState([])


  /* const getAllPokemon = async () => {
    try {
        const response = await 
        axios.get(`${BASE_URL}pokemon?limit=81&offset=0`)

        console.log(response) 
        setPokemonList(response.data.results)

    } catch (error) {
        //console.log(error.response)
    }
  }
 */
  
  

   
  /* const selectPage = () =>{
    if(changePage == "PokemonList"){
      return(
        <>
          <Header 
            chooseHeader={changePage} 
            setChangePage={setChangePage}
          />
          <PokemonListPage
            pokemonList={pokemonList}
            setPokemonList={setPokemonList}
            getAllPokemon={getAllPokemon}
            setChangePage={setChangePage}
          />
        </>
      )
    }else if(changePage == "Pokedex"){
      return(
        <> 
          <Header chooseHeader={changePage} />
          <PokedexPage/>
        </>
      )
    }else if(changePage == "PokemonDetail"){
      return(
        <>
          <Header chooseHeader={changePage} />
          <PokemonDetailPage/> 
        </>
      )
    } 
  };  */
  
 


  return (
    <AppContainer>
      <GlobalStyled/>
     {/*  {selectPage()}   */}
    
          
      <Router/>

    </AppContainer>
    
  )
}

export default App
