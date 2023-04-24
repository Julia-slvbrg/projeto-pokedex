import { useEffect } from "react"
import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokedexContainer } from "../PokedexPage/PokedexStyle"


export const PokedexPage = (props) => {

    const { pokedex, pokeCard, setPokeCard } = props

    useEffect(()=>{
        setPokeCard('pokedex')
    }, [])
    

    return(
        <PageContainer>
            <Header chooseHeader={'Pokedex'} />
            <PokedexContainer>
                {pokedex.map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            pokeCard={pokeCard}
                    
                        />
                    )
                })}
            </PokedexContainer>
            
        </PageContainer>

    )
}

export default PokedexPage