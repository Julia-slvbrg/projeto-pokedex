import { useContext, useEffect } from "react"
import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokedexContainer } from "../PokedexPage/PokedexStyle"
import { GlobalContext } from "../../Contexts/GlobalContext"


export const PokedexPage = () => {

    const context = useContext(GlobalContext);
    const { pokedex, pokeCard, removePokemon } = context;

  
    

    return(
        <PageContainer>
            <Header/>
            <PokedexContainer>
                {pokedex.map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            pokeCard={pokeCard}
                            removePokemon={removePokemon}
                    
                        />
                    )
                })}
            </PokedexContainer>
            
        </PageContainer>

    )
}

export default PokedexPage