import { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PageContainer, PokedexContainer } from "../PokedexPage/PokedexStyle";
import { GlobalContext } from "../../Contexts/GlobalContext";


export const PokedexPage = () => {

    const context = useContext(GlobalContext);
    const { pokedex, pokeCard, removePokemon, setPokemonDetail,setPokemonToDet, pokemonToDet } = context;

    return(
        <PageContainer>
            <Header pokemonToDet={pokemonToDet}/>
            <PokedexContainer>
                {pokedex.map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            pokeCard={pokeCard}
                            removePokemon={removePokemon}
                            setPokemonDetail={setPokemonDetail}
                            setPokemonToDet={setPokemonToDet}
                        />
                    )
                })}
            </PokedexContainer>
        </PageContainer>
    )
}

export default PokedexPage