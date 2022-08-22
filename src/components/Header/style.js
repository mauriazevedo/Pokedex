import styled from "styled-components";

export const HeaderPokemon = styled.header`
    background-color: #F5DB13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    border-bottom: 5px solid rgba(13, 13, 13, 0.1);
`

export const ImageWrapper = styled.div`
    img{
        width: 100px;
    }
`

export const Menu = styled.nav`
    ul{
        padding-left: 0;
        display: flex;
        list-style: none;

        li:first-child{
            margin-right: 20px;
        }

        li{
            a{
                text-decoration: none;
                color: #212121;
                font-size: 20px;
            }

            a:hover{
                border-bottom: 1px solid #212121;
                padding-bottom: 2px;
            }
        }
    }
`