import { useEffect } from "react"
import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"


export const PokedexPage = (props) => {

    const { pokedex, pokeCard, setPokeCard } = props

    useEffect(()=>{
        setPokeCard('pokedex')
    }, [])
    

    return(
        <>
            <Header chooseHeader={'Pokedex'} />
            {pokedex.map((pokemon, index)=>{
                return(
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        pokeCard={pokeCard}
                    
                    />
                )
            })}
        </>

    )
}

export default PokedexPage