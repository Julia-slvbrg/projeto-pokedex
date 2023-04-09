import { useEffect, useState } from "react"
import{ PokemonCardConatiner, InfoContainer, Image, ButtonContainer } from "./PokemonCardStyle"
import axios from "axios"
import { goToDetails } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


export const PokemonCard = (props) => {
    const { pokemon, setChangePage } = props
    const [pokeImg, setPokeImg] = useState('')
    const [pokeId, setPokeId] = useState('')
    const navigate = useNavigate("")

//console.log(pokemon.url) 


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
            console.log(error.response)
        }
    }

    useEffect(() => {
        getPokemonImg()
    }, []) 

    

    return(
        <PokemonCardConatiner>
            <InfoContainer>
                <p>{pokemon.name}</p>
                <p>{pokeId}</p>
                <Image src= {pokeImg} />
            </InfoContainer>
            
            <ButtonContainer>
                <button onClick={()=> goToDetails(navigate)}>Detalhes</button>
                <button>Capturar</button>
            </ButtonContainer>
            
        </PokemonCardConatiner>
    )
}

export default PokemonCard