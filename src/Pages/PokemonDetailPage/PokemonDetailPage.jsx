import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { PageContainer, DetText, CardContainer, ImageContainer, PokeImg, StatsContainer, Title, StatsParams, StatsText, StatsNumber, StatsBar, TotalStatsBar, InfoContainer, ProfileImg, MovesContainer, StatsParamsTotal, Moves, PokeId, PokeName, TypeContainer, ImgBox } from "./PokemonDetailStyle";
import axios from "axios";
import bug from "../../assets/images/types/bug.svg";
import dark from "../../assets/images/types/dark.svg";
import dragon from "../../assets/images/types/dragon.svg";
import electric from "../../assets/images/types/electric.svg";
import fairy from "../../assets/images/types/fairy.svg";
import fighting from "../../assets/images/types/fighting.svg";
import fire from "../../assets/images/types/fire.svg";
import flying from "../../assets/images/types/flying.svg";
import ghost from "../../assets/images/types/ghost.svg";
import grass from "../../assets/images/types/grass.svg";
import ground from "../../assets/images/types/ground.svg";
import ice from "../../assets/images/types/ice.svg";
import normal from "../../assets/images/types/normal.svg";
import poison from "../../assets/images/types/poison.svg";
import psychic from "../../assets/images/types/psychic.svg";
import rock from "../../assets/images/types/rock.svg";
import steel from "../../assets/images/types/steel.svg";
import water from "../../assets/images/types/water.svg";
import { BASE_URL } from "../../constant/BASE_URL/BASE_URL";
import { useParams } from "react-router-dom";


export const PokemonDetailPage = () =>{
    const context = useContext(GlobalContext);
    const { pokemonName } = useParams();
    const {pokemonDetail, setPokemonDetail, setPokemonToDet, pokemonToDet} = context;

    const [pokeImgFront, setPokeImgFront] = useState('');
    const [pokeImgBack, setPokeImgBack] = useState('');
    const [pokeId, setPokeId] = useState('');
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [pokeImg, setPokeImg] = useState('');
    const [moves, setMoves] = useState([]);
      
    useEffect(()=>{
        getPokeDetails()
    }, []);

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

    //nesse tipo de requisição try/catch, dá também pra colocar um .finally no final. Esse finally vai executar não importando se a função entrou no try ou no catch
    //A diferença entre try/catch e try/then => o try/catch vai executando até aparecer o final ou até aparecer um erro, aí se aparecer um erro ele pula pro catch. Já no try/then, o try só executa se não tiver NENHUM ERRO, se tiver algum erro ele pula direto para o then.
    const getPokeDetails = async () => {
        try {
            const response = await 
           /*  axios.get(`${pokemonDetail.url}`) */

            axios.get(`${BASE_URL}pokemon/${pokemonDetail.name}`)

            //console.log('det', response.data)
            setPokeImgFront(response.data.sprites.front_default)
            setPokeImgBack(response.data.sprites.back_default)
            setPokeId(response.data.id)
            setTypes(response.data.types)
            setStats(response.data.stats)
            setPokeImg(response.data.sprites.other.dream_world.front_default)
            setMoves(response.data.moves)

        } catch (error) {
            //console.log(error.response)
        }
    };

    //função para mostrar o id do pokemon conforme o formato requerido
    const id = pokeId.toString().length === 1? `0${pokeId.toString()}` : pokeId.toString();

    //função para mapear os tipos de cada pokemon, para pegar os dois primeiros
    const typeList = types.map((typeObjt) =>{
        return( typeObjt.type.name )
    });

    //Função para criar um array somente com os valores dos stats 
    const arrStats = stats.map((obj) => {
        return (obj.base_stat)
    });

    //Função para retornar o total das stats 
    const getSum = () => {
        if(arrStats.length > 0){
            const sum = arrStats.reduce((accumulator, currentValue)=> accumulator + currentValue);
            return sum
        } ;
    };

    //Função para criar um array somente com os nomes dos movimentos
    const arrMoves = moves.map((obj)=>{
        return (obj.move.name)
    });

    
    return(
        <>
            <Header pokemonToDet={pokemonToDet}/>
            <PageContainer>
        
                <DetText>Detalhes</DetText>

                <CardContainer typeColor={`${typeList[0]}`}>
                    <ImageContainer>
                        <PokeImg src={pokeImgFront} alt="poke-img-front"/>
                        <PokeImg src={pokeImgBack} alt="poke-img-back"/>      
                    </ImageContainer>

                    <StatsContainer>
                        <Title>Base Stats</Title>
                        <StatsParams>
                            <StatsText>HP</StatsText>
                            <StatsNumber>{arrStats[0]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[0]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParams>
                            <StatsText>Attack</StatsText>
                            <StatsNumber>{arrStats[1]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[1]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParams>
                            <StatsText>Defense</StatsText>
                            <StatsNumber>{arrStats[2]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[2]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParams>
                            <StatsText>Sp. Atk</StatsText>
                            <StatsNumber>{arrStats[3]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[3]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParams>
                            <StatsText>Sp. Def</StatsText>
                            <StatsNumber>{arrStats[4]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[4]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParams>
                            <StatsText>Speed</StatsText>
                            <StatsNumber>{arrStats[5]}</StatsNumber>
                            <TotalStatsBar>
                                <StatsBar status={arrStats[5]}></StatsBar>
                            </TotalStatsBar>
                        </StatsParams>
                        <StatsParamsTotal>
                            <StatsText>Total</StatsText>
                            <StatsNumber><b>{getSum()}</b></StatsNumber>
                            <TotalStatsBar></TotalStatsBar>
                        </StatsParamsTotal>
                    </StatsContainer>

                    <InfoContainer>
                        <PokeId>#{id}</PokeId>
                        <PokeName>{pokemonDetail.name.charAt(0).toLocaleUpperCase() + pokemonDetail.name.slice(1)}</PokeName>
                        <TypeContainer>
                            {getTypeImg(typeList[0])}
                            {getTypeImg(typeList[1])}
                        </TypeContainer>

                        <MovesContainer>
                            <Title>Moves:</Title>
                            <Moves>{arrMoves.length>0 && arrMoves[0].charAt(0).toLocaleUpperCase() + arrMoves[0].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[1].charAt(0).toLocaleUpperCase() + arrMoves[1].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[2].charAt(0).toLocaleUpperCase() + arrMoves[2].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[3].charAt(0).toLocaleUpperCase() + arrMoves[4].slice(1)}</Moves>
                        </MovesContainer>
                    </InfoContainer>

                    <ImgBox>
                        <ProfileImg src={pokeImg} alt="pokemon-img"/>
                    </ImgBox>
                </CardContainer>
            </PageContainer>
        </>
    )
}

export default PokemonDetailPage

