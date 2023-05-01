import { useContext, useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import { GlobalContext } from "../../Contexts/GlobalContext"
import axios from "axios";
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


export const PokemonDetailPage = () =>{
    const context = useContext(GlobalContext);
    const {pokemonDetail} = context;

    const [pokeImgFront, setPokeImgFront] = useState('');
    const [pokeImgBack, setPokeImgBack] = useState('');
    const [pokeId, setPokeId] = useState('');
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [pokeImg, setPokeImg] = useState('');
    const [moves, setMoves] = useState([]);

    
   //console.log(pokemonDetail.name)
    
    useEffect(()=>{
        getPokeDetails()
        
    }, [])

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



    const getPokeDetails = async () => {
        try {
            const response = await 
            axios.get(`${pokemonDetail.url}`)
            console.log('det', response.data)
            setPokeImgFront(response.data.sprites.front_default)
            setPokeImgBack(response.data.sprites.back)
            setPokeId(response.data.id)
            setTypes(response.data.types)
            setStats(response.data.stats)
            setPokeImg(response.data.sprites.other.dream_world.front_default)
            setMoves(response.data.moves)

        } catch (error) {
            console.log(error.response)
        }
    }

    //função para mostrar o id do pokemon conforme o formato requerido
    const id = pokeId.toString().length === 1? `0${pokeId.toString()}` : pokeId.toString();

    //função para mapear os tipos de cada pokemon, para pegar os dois primeiros
    const typeList = types.map((typeObjt) =>{
        return( typeObjt.type.name )
    });
     
    

    return(
        <>
            <Header/>
            <h1>Detalhes</h1>

            <>
                <p>imagem frontal</p>
                <p>imagem das costas</p>

                <>
                    <h2>Base Stats</h2>
                    <p>HP</p>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Sp. Atk</p>
                    <p>Sp. Def</p>
                    <p>Speed</p>
                    <p>Total</p>
                </>

                <>
                    <p>#{id}</p>
                    <p>{pokemonDetail.name.charAt(0).toLocaleUpperCase() + pokemonDetail.name.slice(1)}</p>
                    <p>
                        {getTypeImg(typeList[0])}
                        {getTypeImg(typeList[1])}
                    </p>
                    <p>imagem</p>
                </>

                <>
                    <h2>Moves:</h2>
                    <p>move1</p>
                    <p>move2</p>
                    <p>move3</p>
                    <p>move4</p>
                </>
            </>
            
            
        </>
        
    )
}

export default PokemonDetailPage