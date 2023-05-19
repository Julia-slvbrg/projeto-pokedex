import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/BASE_URL/BASE_URL";
import { GlobalContext } from "./GlobalContext";
import bug from "../assets/images/types/bug.svg";
import dark from "../assets/images/types/dark.svg";
import dragon from "../assets/images/types/dragon.svg";
import electric from "../assets/images/types/electric.svg";
import fairy from "../assets/images/types/fairy.svg";
import fighting from "../assets/images/types/fighting.svg";
import fire from "../assets/images/types/fire.svg";
import flying from "../assets/images/types/flying.svg";
import ghost from "../assets/images/types/ghost.svg";
import grass from "../assets/images/types/grass.svg";
import ground from "../assets/images/types/ground.svg";
import ice from "../assets/images/types/ice.svg";
import normal from "../assets/images/types/normal.svg";
import poison from "../assets/images/types/poison.svg";
import psychic from "../assets/images/types/psychic.svg";
import rock from "../assets/images/types/rock.svg";
import steel from "../assets/images/types/steel.svg";
import water from "../assets/images/types/water.svg";



export default function GlobalState({children}){

    const [pokemonList, setPokemonList] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [isFunctionCatch, setIsFunctionCatch] = useState(false);

    useEffect(()=>{
        getAllPokemon() 
        setPokemonDetail()
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
    };

    //Função para acrescentar pokemons ao array pokedex
    const catchPokemon = (caughtPokemon) => {
        setPokedex([... pokedex, caughtPokemon]);
    };

    //Função parar remover pokemons do array pokedex
    const removePokemon = (pokemonRemove) =>{
        const pokemonInPokedex = pokedex.filter((pokemon) =>{
            return pokemon.name !== pokemonRemove.name
        });
        setPokedex(pokemonInPokedex)
    };

    //Função para renderizar a imagem específica do tipo do pokemon no card
    const getTypeImg =(type) =>{
        if(type){
            switch(type){
                case 'bug':
                    return(<img src={bug}/>)
                    break;
                case 'dark':
                    return(<img src={dark}/>)
                    break;
                case 'dragon':
                    return(<img src={dragon}/>)
                    break;
                case 'electric':
                    return(<img src={electric}/>)
                    break;
                case 'fairy':
                    return(<img src={fairy}/>)
                    break;
                case 'fighting':
                    return(<img src={fighting}/>)
                    break;
                case 'fire':
                    return(<img src={fire}/>)
                    break;
                case 'flying':
                    return(<img src={flying}/>)
                    break;
                case 'ghost':
                    return(<img src={ghost}/>)
                    break;
                case 'grass':
                    return(<img src={grass}/>)
                    break;
                case 'ground':
                    return(<img src={ground}/>)
                    break;
                case 'ice':
                    return(<img src={ice}/>)
                    break;
                case 'normal':
                    return(<img src={normal}/>)
                    break;
                case 'poison':
                    return(<img src={poison}/>)
                    break;
                case 'psychic':
                    return(<img src={psychic}/>)
                    break;
                case 'rock':
                    return(<img src={rock}/>)
                    break;
                case 'steel':
                    return(<img src={steel}/>)
                    break;
                case 'water':
                    return(<img src={water}/>)
                    break;
            };
        };
    };

    const data ={
        pokemonList,
        pokedex,
        catchPokemon,
        removePokemon,
        setPokemonDetail,
        pokemonDetail,
        getTypeImg,
        openModal,
        setOpenModal,
        isFunctionCatch, 
        setIsFunctionCatch
    };

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}