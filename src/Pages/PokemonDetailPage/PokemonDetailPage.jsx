import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { PageContainer, DetText, CardContainer, ImageContainer, PokeImg, StatsContainer, Title, StatsParams, StatsText, StatsNumber, StatsBar, TotalStatsBar, InfoContainer, ProfileImg, MovesContainer, StatsParamsTotal, Moves, PokeId, PokeName, TypeContainer, ImgBox } from "./PokemonDetailStyle";
import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL/BASE_URL";
import { useParams } from "react-router-dom";
import { Modal } from "../../Components/Modal/Modal";


export const PokemonDetailPage = () =>{
    const context = useContext(GlobalContext);
    //const { pokemonName } = useParams();
    const {pokemonDetail, getTypeImg, openModal, setOpenModal, isFunctionCatch, setIsFunctionCatch} = context;

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

    //nesse tipo de requisição try/catch, dá também pra colocar um .finally no final. Esse finally vai executar não importando se a função entrou no try ou no catch
    //A diferença entre try/catch e try/then => o try/catch vai executando até aparecer o final ou até aparecer um erro, aí se aparecer um erro ele pula pro catch. Já no try/then, o try só executa se não tiver NENHUM ERRO, se tiver algum erro ele pula direto para o then.
    const getPokeDetails = async () => {
        try {
            const response = await 
           /*  axios.get(`${pokemonDetail.url}`) */

            axios.get(`${BASE_URL}pokemon/${pokemonDetail.name}`);

            //console.log('det', response.data)
            setPokeImgFront(response.data.sprites.front_default);
            setPokeImgBack(response.data.sprites.back_default);
            setPokeId(response.data.id);
            setTypes(response.data.types);
            setStats(response.data.stats);
            //setPokeImg(response.data.sprites.other.dream_world.front_default);
            setPokeImg(response.data.sprites.other['official-artwork'].front_default);
            setMoves(response.data.moves);

        } catch (error) {
            //console.log(error.response);
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
            <Header 
                pokemonDetail={pokemonDetail}
                setOpenModal={setOpenModal}
                openModal={openModal}
                setIsFunctionCatch={setIsFunctionCatch}
            />
            <PageContainer>
                <Modal
                    openModal={openModal}
                    setOpenModal={() => setOpenModal(!openModal)}
                    isFunctionCatch={isFunctionCatch}
                />
        
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
                            {typeList[0] && getTypeImg(typeList[0])}
                            {typeList[1] && getTypeImg(typeList[1])}
                        </TypeContainer>

                        <MovesContainer>
                            <Title>Moves:</Title>
                            <Moves>{arrMoves.length>0 && arrMoves[0].charAt(0).toLocaleUpperCase() + arrMoves[0].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[1].charAt(0).toLocaleUpperCase() + arrMoves[1].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[2].charAt(0).toLocaleUpperCase() + arrMoves[2].slice(1)}</Moves>
                            <Moves>{arrMoves.length>0 && arrMoves[3].charAt(0).toLocaleUpperCase() + arrMoves[3].slice(1)}</Moves>
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

