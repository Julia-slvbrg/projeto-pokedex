import { useEffect } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokemonListContainer } from './PokemonListStyle'
import Header from '../../Components/Header/Header'



export const PokemonListPage = (props) =>{
    const { pokemonList, getAllPokemon, catchPokemon, pokeCard, setPokeCard } = props
    
    
   
    useEffect(()=>{
        getAllPokemon() 
        setPokeCard('list')
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
                            catchPokemon={catchPokemon}
                            pokeCard={pokeCard}
                            
                        />
                    )
                })} 
                
            
            </PokemonListContainer>
        </PageContainer>
    )
}

export default PokemonListPage

