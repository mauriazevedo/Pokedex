import React from "react";
import { HeaderPokemon, ImageWrapper, Menu } from "./style";
import logo from "./../../images/logo-pokemon.svg"

function Header() {
    return(
        <HeaderPokemon>
            <ImageWrapper>
                <a href="/"><img src={logo} /></a>
            </ImageWrapper>

            <Menu>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/pokemons">Pokémons</a></li>
                </ul>
            </Menu>
        </HeaderPokemon>
    );
}

export default Header;