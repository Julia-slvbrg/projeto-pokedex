import { useContext } from "react"
import Header from "../../Components/Header/Header"
import { GlobalContext } from "../../Contexts/GlobalContext"

export const PokemonDetailPage = () =>{
    const context = useContext(GlobalContext);
    
    


    return(
        <>
            <Header/>
            <>POKEMON DETAIL PAGE</>
        </>
        
    )
}

export default PokemonDetailPage