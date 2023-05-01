import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/BASE_URL/BASE_URL";
import { GlobalContext } from "./GlobalContext";



export default function GlobalState({children}){

    const [pokemonList, setPokemonList] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [filteredList, setFilteredList] = useState();
    const [pokemonDetail, setPokemonDetail] = useState([]);
    
    useEffect(()=>{
        getAllPokemon() 
    }, []);
 
  
    //Função parar pegar todos os dados de todos os pokemons da API
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

    //Função para acrescentar pokemons ao array pokedex
    const catchPokemon = (caughtPokemon) => {
        setPokedex([... pokedex, caughtPokemon]);
    }

    //Função parar remover pokemons do array pokedex
    const removePokemon = (pokemonRemove) =>{
        const pokemonInPokedex = pokedex.filter((pokemon) =>{
            return pokemon.name !== pokemonRemove.name
        });
        setPokedex(pokemonInPokedex)
    }



    const data ={
        pokemonList,
        pokedex,
        catchPokemon,
        removePokemon,
        setPokemonDetail,
        pokemonDetail
    }



    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}