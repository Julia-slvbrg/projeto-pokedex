import { useEffect } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokemonListContainer } from './PokemonListStyle'
import Header from '../../Components/Header/Header'




export const PokemonListPage = (props) =>{
    const { pokemonList, catchPokemon, pokeCard, setPokeCard } = props
    

   
    useEffect(()=>{
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


/* 

    const renderList = () => {
        if(pokedex.length > 0){
           
            return (filteredList.map((pokemon, index)=>{
                return(
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        catchPokemon={catchPokemon}
                        pokeCard={pokeCard}
                        
                    />
                )
            }))
        }else{
           return( pokemonList.map((pokemon, index)=>{
                return(
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        catchPokemon={catchPokemon}
                        pokeCard={pokeCard}
                        
                    />
                )
            }))
        }
    }
     */