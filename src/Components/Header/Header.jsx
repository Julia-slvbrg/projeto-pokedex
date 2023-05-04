import { HeaderContainer, Image, PokedexButton, NavLink, ArrowIcon } from "./HeaderStyle"
import headerLogo from "../../assets/images/pokemons-logo-header.svg"
import arrowSymbol from "../../assets/images/eva_arrow-ios-back-outline.svg"
import {goToPokemonList, goToPokedex, goBack} from "../../Routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"


export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation();
    

    const chooseHeader = () => {
        switch(location.pathname){
            case '/':
                return(
                    <HeaderContainer>
                   
                        <Image src={headerLogo} />
                        <PokedexButton onClick={()=> goToPokedex(navigate)}>Pokédex</PokedexButton>
                    </HeaderContainer>
                );
                break
            case '/pokedex':
                return(
                    <HeaderContainer>
                        <NavLink onClick={() => goToPokemonList(navigate)}>
                        <ArrowIcon src={arrowSymbol}/>
                            Todos Pokémons
                        </NavLink>
                        <Image src={headerLogo} />
                       
                    </HeaderContainer>
                );
                break
            case '/pokedex/details':
                return(
                    <HeaderContainer>
                        <NavLink onClick={() => goBack(navigate)}>
                        <ArrowIcon src={arrowSymbol}/>
                            Todos Pokémons
                        </NavLink>
                        <Image src={headerLogo} />
                        <PokedexButton>Excluir da Pokédex</PokedexButton>
                    </HeaderContainer>
                );
                break
        }
    };

   
    return(
        <>
            {chooseHeader()}
        </>
      
    )
}


export default Header