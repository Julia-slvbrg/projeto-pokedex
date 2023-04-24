import { BrowserRouter, Routes, Route } from "react-router-dom" 
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"


export const Router = (props) => {
    const { pokemonList, catchPokemon, pokeCard, setPokeCard, pokedex } = props

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <PokemonListPage 
                            pokemonList={pokemonList} 
                            catchPokemon={catchPokemon}
                            pokeCard={pokeCard}
                            setPokeCard={setPokeCard}
                        />
                    } 
                />
                <Route 
                    path="/pokedex" 
                    element={
                        <PokedexPage
                            pokedex={pokedex}
                            pokeCard={pokeCard}
                            setPokeCard={setPokeCard}
                        />
                    } 
                />
                <Route path="/pokedex/details" element={<PokemonDetailPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router