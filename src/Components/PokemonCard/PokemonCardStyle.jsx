import styled from "styled-components";


export const PokemonCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    //background-color:;
    border: 1px solid black;
    height: 12em;
    width: 26em;
    margin : 1.5em 0;
    border-radius: .6em;

`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    //gap: 3em;
   
    background-color: green;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    margin-top: 1em;

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
`

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5em;

`

export const Image = styled.img`
    width: 10em;
    height: 10em;
    background-color: coral;
    position: relative;
    bottom: 2em;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`