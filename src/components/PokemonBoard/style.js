import styled from "styled-components";

export const WrapperCard = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const CardPokemon = styled.div`
    background-color: red;
    display: flex;
    width: 80%;
    border-radius: 20px;
`

export const LeftContainer = styled.div`
    width: 50%;

    img{
        width: 100%;
    }
`

export const RightContainer = styled.div`
    background-color: yellow;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`

export const FirstLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    width: 100%;
    height: 20%;

    span{
        width: 50px;
        font-size: 1.5em;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 50%;
    }
`

export const Abilities = styled.div`
    background-color: white;
    padding: 0 5%;
    width: 100%;
`