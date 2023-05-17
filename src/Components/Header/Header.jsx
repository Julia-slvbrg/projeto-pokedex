import { HeaderContainer, Image, Button, NavLink, ArrowIcon, DeleteButton } from "./HeaderStyle";
import headerLogo from "../../assets/images/pokemons-logo-header.svg";
import arrowSymbol from "../../assets/images/eva_arrow-ios-back-outline.svg";
import {goToPokemonList, goToPokedex, goBack} from "../../Routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";


export const Header = ({ pokemonDetail, setOpenModal, setIsFunctionCatch }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(GlobalContext);
    
    const { removePokemon, catchPokemon, pokemonToDet, pokedex} = context;

    const chooseButton = () => {
        const pokemonInPokedex = pokedex.find((pokeObj)=> pokeObj.name == pokemonDetail.name);
           
        return (pokemonInPokedex ? 
            <DeleteButton onClick={()=>{
                removePokemon(pokemonDetail)
                setOpenModal(true)
                setIsFunctionCatch(false)
            }}>Excluir da Pokédex</DeleteButton> : 
            <Button onClick={()=>{
                catchPokemon(pokemonDetail)
                setOpenModal(true)
                setIsFunctionCatch(true)
            }}>Capturar!</Button>
        )  
    };
   
    const chooseHeader = () => {
        switch(location.pathname){
            case '/':
                return(
                    <HeaderContainer>
                        <Image src={headerLogo} />
                        <Button onClick={()=> goToPokedex(navigate)}>Pokédex</Button>
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
            case  `/pokedex/details/${pokemonToDet}`:
                return(
                    <HeaderContainer>
                        <NavLink onClick={() => goBack(navigate)}>
                            <ArrowIcon src={arrowSymbol}/>
                            Todos Pokémons
                        </NavLink>
                        <Image src={headerLogo} />
                        { chooseButton() }
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
