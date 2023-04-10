import { useEffect, useState } from "react"
import{ PokemonCardContainer, InfoContainer, DataContainer, TypeContainer, PokeId, PokeName, Image, ButtonContainer } from "./PokemonCardStyle"
import axios from "axios"
import { goToDetails } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"



export const PokemonCard = (props) => {
    const { pokemon } = props
    const [pokeImg, setPokeImg] = useState('')
    const [pokeId, setPokeId] = useState('')
    const [types, setTypes] = useState([])
    const navigate = useNavigate("")

    //console.log(props)

   const getPokemonImg = async () => {
        try {
            const response = await
            axios.get(`${pokemon.url}`)
            //console.log(response)
            //console.log(response.data)
            setPokeId(response.data.id)
            //setPokeImg(response.data.sprites.other.home.front_default)
            setPokeImg(response.data.sprites.other.dream_world.front_default)

        } catch (error) {
            //console.log(error.response)
        }
    };

    const getPokemonType = async () => {
        try {
            const response = await
            axios.get(`${pokemon.url}`)
            //console.log(response.data.types)
            setTypes(response.data.types)
            
        } catch (error) {
            console.log(error.response)
        }
    };

    const TypeList = types.map((typeObjt) =>{
        return( typeObjt.type.name )
    });
    

    const id = pokeId.toString().length === 1? `0${pokeId.toString()}` : pokeId.toString()
   
    
    useEffect(() => {
        getPokemonImg()
        getPokemonType()
       
    }, []) ;


    return(
        <PokemonCardContainer>
             <DataContainer>
            
           
                <InfoContainer>
                    <PokeId>#{id}</PokeId>
                    <PokeName>{pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}</PokeName>
                    <TypeContainer>
                        <p>{TypeList[0]}</p>
                        <p>{TypeList[1]}</p>
                    </TypeContainer>
                </InfoContainer> 
                <Image src= {pokeImg} alt="pokemon_image"/>
                
            </DataContainer>

            
            
            <ButtonContainer>
                <a onClick={()=> goToDetails(navigate)}>Detalhes</a>
                <button>Capturar</button>
            </ButtonContainer>
            
        </PokemonCardContainer>
    )
}

export default PokemonCard