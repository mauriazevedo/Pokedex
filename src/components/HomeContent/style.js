import styled from "styled-components";

export const MainContainer = styled.div`
    color: black;
    display: flex;
    background-image: linear-gradient(to bottom, #f4dc14, #f4bc04);
`

export const Title = styled.h1`
    font-weight: 300;
`

export const LeftContainer = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    margin-left: 5%;
`

export const ContentWrapper = styled.div`
    h1{
        width: 100%;
        font-size: 3em;
    }

    p{
        width: 100%;
        font-size: 1.5em;
    }

    button{
        background-color: #73D677;
        font-family: 'Source Sans Pro', sans-serif;
        border: 0;
        padding: 15px;
        border-radius: 10px;
        font-size: 1.1em;
        font-weight: 700;
        border-bottom: 6px solid #60ac64;
        color: #212121;
        cursor: pointer;

        &:hover{
            background-color: #60ac64;
        }
    }
`

export const RightContainer = styled.div`
    flex: 6;
    display: flex;
    justify-content: right;

    img{
        height: calc(100vh - 153px);
    }
`