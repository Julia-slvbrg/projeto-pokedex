import styled from "styled-components";


export const PageContainer = styled.div`
    //height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 3em;
    padding: 2.5em 2em 2em 4em;

`

export const DetText= styled.h1`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.8em;
    line-height: 1em;
`

export const CardContainer = styled.div`
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
                return '#E2BF65'
                break;
            case 'fairy':
                return '#e1abdd' 
                break;
            case 'fighting':
                return '#C22E28'
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
                return '#A33EA1'
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4em;
    align-items: stretch;
    justify-content: stretch;
    padding: 2em 3em 2em 3em;
    width: 90vw;
    height: 75vh;
    border-radius: 1.8em;

` 

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2em;
`



export const PokeImg = styled.img`
    background-color: #FFFFFF;;
    width: 14em;
    height: 14em;
    border-radius: .8em;
`

export const StatsContainer = styled.div`
    background-color: #FFFFFF;
    width: 20em;
    border-radius: 1.8em;
    padding: 2em;
`

export const Title = styled.h2`
    color: #000000;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.3em;
    line-height: 1em;
`

export const StatsParams = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

export const StatsText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    text-align: right;
    font-size: .8em;
    line-height: 3em;
    width: 4em;
    background-color: aqua;
    color: #8c8787;
`

export const StatsNumber = styled.p`
font-family: 'Poppins', sans-serif;
    font-style: normal;
    text-align: right;
    font-size: .8em;
    font-weight: 400;
    line-height: 3em;
    color: #000000;
`

export const TotalStatsBar = styled.div`
    width: 30em;
    background-color: red;
`

export const StatsBar = styled.button`
    background-color: green;
    width: ${(props)=>props.status}%;
   

`

export const InfoContainer = styled.div`
    background-color: red;

`

export const ProfileImg = styled.img`
    width: 10em;
    height: 12em;
`

export const MovesContainer = styled.div`
    background-color: #FFFFFF;
`
