import { Background, CloseIcon, ModalContainer, Title } from "./ModalStyle"


export const Modal = ({ openModal, setOpenModal, isFunctionCatch}) => {
    
    //console.log({openModal})
    


    if(openModal && isFunctionCatch){
        return(
            <Background>
                <ModalContainer>

                    <CloseIcon
                        onClick={setOpenModal}
                    >XXXX</CloseIcon>

                    
                    <Title>Gotcha!</Title>
                    <p>O Pokémon foi adicionado a sua Pokédex</p>
        
                </ModalContainer>
            </Background>
        )
    }else if(openModal && !isFunctionCatch){
        return(
            <Background>
                <ModalContainer>

                    <CloseIcon
                        onClick={setOpenModal}
                    >XXXX</CloseIcon>

                    <Title>Oh, no!</Title>
                    <p>O Pokémon foi removido da sua Pokédex</p>

                </ModalContainer>
            </Background>)
    }

}

export default Modal