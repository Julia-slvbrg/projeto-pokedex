import axios from 'axios'
import { BASE_URL } from "../../constant/BASE_URL/BASE_URL"
import { useEffect, useState } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokemonListContainer } from './PokemonListStyle'
import Header from '../../Components/Header/Header'



export const PokemonListPage = (props) =>{
    const { pokemonList, getAllPokemon } = props
   

   
    useEffect(()=>{
        getAllPokemon() 
    }, []);
    

    return(
        
        <PageContainer>
            <Header chooseHeader={'PokemonList'} />
            <PokemonListContainer> 
                {pokemonList.map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                        />
                    )
                })} 
            </PokemonListContainer>
        </PageContainer>
    )
}

export default PokemonListPage


 /*   //Agora tudo isso aqui está chegando por props, essa função de getAllPokemon está declara no App 
    
    const [pokemonList, setPokemonList] = useState([])
    const getAllPokemon = async () => {
        try {
            const response = await 
            axios.get(`${BASE_URL}pokemon?limit=81&offset=0`)
    
            console.log(response) 
            setPokemonList(response.data.results)
    
        } catch (error) {
            //console.log(error.response)
        }
    } */
