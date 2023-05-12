import { useEffect, useState } from "react"
import{ PokemonCardContainer, InfoContainer, DataContainer, TypeContainer, PokeId, PokeName, Image, ButtonContainer, CatchButton, DeleteButton, DetailsLink } from "./PokemonCardStyle"
import axios from "axios"
import { goToDetails } from "../../Routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import pokeballWaterMark from "../../assets/images/pokeball-mark.svg"
import bug from "../../assets/images/types/bug.svg"
import dark from "../../assets/images/types/dark.svg"
import dragon from "../../assets/images/types/dragon.svg"
import electric from "../../assets/images/types/electric.svg"
import fairy from "../../assets/images/types/fairy.svg"
import fighting from "../../assets/images/types/fighting.svg"
import fire from "../../assets/images/types/fire.svg"
import flying from "../../assets/images/types/flying.svg"
import ghost from "../../assets/images/types/ghost.svg"
import grass from "../../assets/images/types/grass.svg"
import ground from "../../assets/images/types/ground.svg"
import ice from "../../assets/images/types/ice.svg"
import normal from "../../assets/images/types/normal.svg"
import poison from "../../assets/images/types/poison.svg"
import psychic from "../../assets/images/types/psychic.svg"
import rock from "../../assets/images/types/rock.svg"
import steel from "../../assets/images/types/steel.svg"
import water from "../../assets/images/types/water.svg"
import { BASE_URL } from "../../constant/BASE_URL/BASE_URL"


export const PokemonCard = (props) => {
    const { pokemon, catchPokemon, removePokemon, setPokemonDetail/* , pokemonDetail */, setPokemonToDet} = props;

    const location = useLocation();
    const navigate = useNavigate();

    const [pokeImg, setPokeImg] = useState('');
    const [pokeId, setPokeId] = useState('');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getPokemonData()
    }, [pokemon]);
    

    //função para renderizar a imagem específica do pokemon do card
    const getTypeImg =(type) =>{
        if(type){
            switch(type){
                case 'bug':
                    return(<img src={bug}/>)
                    break;
                case 'dark':
                    return(<img src={dark}/>)
                    break;
                case 'dragon':
                    return(<img src={dragon}/>)
                    break;
                case 'electric':
                    return(<img src={electric}/>)
                    break;
                case 'fairy':
                    return(<img src={fairy}/>)
                    break;
                case 'fighting':
                    return(<img src={fighting}/>)
                    break;
                case 'fire':
                    return(<img src={fire}/>)
                    break;
                case 'flying':
                    return(<img src={flying}/>)
                    break;
                case 'ghost':
                    return(<img src={ghost}/>)
                    break;
                case 'grass':
                    return(<img src={grass}/>)
                    break;
                case 'ground':
                    return(<img src={ground}/>)
                    break;
                case 'ice':
                    return(<img src={ice}/>)
                    break;
                case 'normal':
                    return(<img src={normal}/>)
                    break;
                case 'poison':
                    return(<img src={poison}/>)
                    break;
                case 'psychic':
                    return(<img src={psychic}/>)
                    break;
                case 'rock':
                    return(<img src={rock}/>)
                    break;
                case 'steel':
                    return(<img src={steel}/>)
                    break;
                case 'water':
                    return(<img src={water}/>)
                    break;
            };
        };
    };
 
   //função para pegar os dados de um pokemon específico da API
    const getPokemonData = async () => {
        try {
            const response = await
            axios.get(`${BASE_URL}pokemon/${pokemon.name}`)
            setPokeId(response.data.id)
            //setPokeImg(response.data.sprites.other.home.front_default)
            setPokeImg(response.data.sprites.other.dream_world.front_default)
            setTypes(response.data.types)

        } catch (error) {
            //console.log(error.response)
        }
    }; 
     
 
    //função para mapear os tipos de cada pokemon, para pegar os dois primeiros
    const typeList = types.map((typeObjt) =>{
        return( typeObjt.type.name )
    });
    
    //função para mostrar o id do pokemon conforme o formato requerido
    const id = pokeId.toString().length === 1? `0${pokeId.toString()}` : pokeId.toString();
   
    //função para mostrar o botão específico da página, podendo ser o de Capturar ou Excluir
    const selectButton = () => {
        if(location.pathname === '/'){
            return(
                <CatchButton onClick={()=> catchPokemon(pokemon)}>Capturar!</CatchButton>
            )
        }else if(location.pathname === '/pokedex'){
            return(
                <DeleteButton onClick={()=> removePokemon(pokemon)}>Excluir</DeleteButton>
            )
        }
    };

 const onClickDetails = () => {
    setPokemonDetail(pokemon)
    goToDetails(navigate, pokemon.name) 
    setPokemonToDet(pokemon.name)
 }
   

    return(
        <PokemonCardContainer typeColor={`${typeList[0]}`}>
             <DataContainer>
                <InfoContainer waterMark={pokeballWaterMark}>
                    <PokeId>#{id}</PokeId>
                    <PokeName>{pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}</PokeName>
                    <TypeContainer>
                        {getTypeImg(typeList[0])}
                        {getTypeImg(typeList[1])}
                    </TypeContainer>
                </InfoContainer> 
                <Image src= {pokeImg} alt="pokemon_image"/>
            </DataContainer>

            <ButtonContainer>
                <DetailsLink 
                    onClick={()=> {
                        onClickDetails()
                    }}
                >
                    Detalhes
                </DetailsLink>
                {selectButton()}
            </ButtonContainer>
        </PokemonCardContainer>
    )
}

export default PokemonCard