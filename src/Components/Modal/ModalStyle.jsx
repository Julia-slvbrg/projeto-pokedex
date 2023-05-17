import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(56, 58, 58, 0.7);
    z-index: 1000;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px;
    background-color: #fff;
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CloseIcon = styled.span`
  cursor: pointer;
  position: fixed;
  top: 2em;
  right: 4em;
`

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  color: #000000;
  line-height: 2em;
`