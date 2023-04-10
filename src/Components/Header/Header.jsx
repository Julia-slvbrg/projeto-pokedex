import { HeaderContainer, Image, PokedexButton } from "./HeaderStyle"
import headerLogo from "../../assets/images/pokemons-logo-header.svg"
import arrowSymbol from "../../assets/images/eva_arrow-ios-back-outline.svg"
import { useEffect } from "react"
import {goToPokemonList, goToPokedex} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


export const Header = (props) => {
    const navigate = useNavigate()
    const { chooseHeader } = props;

 
    const showHeader = (chooseHeader) => {
        if(chooseHeader == 'PokemonList'){
            return(
                <HeaderContainer>
                    <Image src={headerLogo} />
                    <PokedexButton onClick={()=> goToPokedex(navigate)}>Pokédex</PokedexButton>
                </HeaderContainer>
            )
        }else if (chooseHeader == 'Pokedex'){
            return(
                <HeaderContainer>
                    <a onClick={() => goToPokemonList(navigate)}>
                        <img src={arrowSymbol}/>
                        Todos Pokémons
                    </a>
                    <Image src={headerLogo} />
                </HeaderContainer>
            )
        }else if(chooseHeader == 'PokemonDetail'){
            return(
                <HeaderContainer>
                    <a onClick={() => goToPokemonList(navigate)}>
                        <img src={arrowSymbol}/>
                        Todos Pokémons
                    </a>
                    <Image src={headerLogo} />
                    <PokedexButton>Excluir da Pokédex</PokedexButton>
                </HeaderContainer>
            )
        }
    };

   
    return(
        <>
            {showHeader(chooseHeader)}
        </>
      
    )
}


export default Header