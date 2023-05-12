import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 8em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background-color: #FFFFFF;
    padding: 0 1em 0em 0em;
`

export const Image = styled.img`
    scale: .9;
    justify-self: center;
    grid-column: 2/3;
`
export const NavLink = styled.a`
    grid-column: 1/2;
    margin-left: 3em;
    font-family: 'Poppins', sans-serif;
    color: #1A1A1A;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1em;
    line-height: .9em;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover{
        cursor: pointer;
    };
    &:active{
        text-decoration: none;
    };
`

export const ArrowIcon = styled.img`
    scale: .9;
`

export const PokedexButton = styled.button`
    height: 3em;
    width: 12em;
    background-color: #33A4F5;
    margin-left: 10em;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    line-height: .9em;
    border: #FFFFFF 1px;
    border-radius: .3em;
    grid-column: 3/4;

    &:hover{
        cursor: pointer;
    };
    &:active{
        text-decoration: none;
    };
`
    