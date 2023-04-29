import { useContext, useEffect } from "react"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PokemonListContainer } from './PokemonListStyle'
import Header from '../../Components/Header/Header'
import { GlobalContext } from "../../Contexts/GlobalContext"




export const PokemonListPage = () =>{

    const context = useContext(GlobalContext);
    const { pokemonList, catchPokemon, pokedex } = context
    
    
    const filterPokemonList = () => {
        return pokemonList.filter((pokeList)=> !pokedex.find((pokePokedex)=> pokePokedex.name == pokeList.name))
    }
    //em filterPokemonList, dentro do método filter tem-se !pokedex.find((pokePokedex)=> pokePokedex.name == pokeList.name), isso compara os nomes dos pokemons dentro de pokedex e de pokeList, se não tiver nenhum match o retorno é undefined (um falsy valeu) e o operador "!" converte ele para true. Se o método find achar um match, o resultado é negado pelo operador "!" e o retorno é undefined, então esse match não é adicionado ao array de elementos filtrados.

   
    return(
        
        <PageContainer>
            <Header/>
            <PokemonListContainer> 
                {filterPokemonList().map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            catchPokemon={catchPokemon}
                            
                            
                        />
                    )
                })}         
            </PokemonListContainer>
        </PageContainer>
    )
}

export default PokemonListPage