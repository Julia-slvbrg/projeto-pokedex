import styled from "styled-components";
import pokeballWaterMark from "../../assets/images/pokeball-mark.svg"

export const PokemonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    height: 12em;
    width: 27em;
    margin : 1.5em 0 1.5em 0;
    border-radius: .6em;
    background-color: ${(props) => {
        switch(props.typeColor){
            case 'bug':
                return '#76A866' 
                break;
            case 'dark':
                return '#5C5365'
                break;
            case 'dragon':
                return '#004170' 
                break;
            case 'electric':
                return '#d7ba01bc'
                break;
            case 'fairy':
                return '#e1abdd' 
                break;
            case 'fighting':
                return '#eb2e64d9'
                break;
            case 'fire':
                return '#EAAB7D' 
                break;
            case 'flying':
                return '#5e85a19c'
                break;
            case 'ghost':
                return '#3e4e819a'
                break;
            case 'grass':
                return '#729F92' 
                break;
            case 'ground':
                return '#6e3e25' 
                break;
            case 'ice':
                return '#559a90d6'
                break;
            case 'normal':
                return '#BF9762' 
                break;
            case 'poison':
                return '#d466d6a7'
                break;
            case 'psychic':
                return '#d1575bef'
                break;
            case 'rock':
                return '#a5925cf0'
                break;
            case 'steel':
                return '#886f6fac'
                break;
            case 'water':
                return '#71C3FF' 
                break;
        };
    }};
        
    background-image: url(${pokeballWaterMark});
    background-repeat: no-repeat;
    background-position-x: 11.2em;
    background-position-y: -1em;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
 
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.5em 0 0 1em;
    width: 14em;
`

export const PokeId = styled.h3`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: .8em;
    line-height: 1em;
    color: #FFFFFF;
`

export const PokeName = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1em;
    color: #FFFFFF;
    margin: .2em 0 .6em 0;
`

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5em;
    margin-left: -.75em;
    scale: .9;
`

export const Image = styled.img`
    width: 10em;
    height: 10em;
    position: relative;
    bottom: 2.5em;
    right: .5em;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5em 0 2em;
    margin: -1.4em 0 0 0;
`

export const CatchButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    color: #0F0F0F;
    line-height: 1em;
    width: 10em;
    height: 2.5em;
    border-radius: .4em;
    background-color: #DDDDDD;
    border: 1px solid #DDDDDD;

        :hover{
            cursor: pointer;
        };

        :active{
            text-decoration: underline;
        };
`

export const DeleteButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    color: #FFFFFF;
    line-height: 1em;
    width: 10em;
    height: 2.5em;
    border-radius: .4em;
    background-color: #FF6262;
    border: 1px solid #FF6262;

        :hover{
            cursor: pointer;
        };

        :active{
            text-decoration: underline;
        };
`

export const DetailsLink = styled.a`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 1em;
    text-decoration: underline;

    :hover{
        cursor: pointer;
    };

    :active{
        text-decoration: none;
    };
`