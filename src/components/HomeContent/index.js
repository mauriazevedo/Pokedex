import React from "react";
import { MainContainer, LeftContainer, RightContainer, Title, ContentWrapper } from "./style";
import pikachu from "./../../images/pikachu-home.svg"

function HomeContent() {
    return(
        <MainContainer>
            <LeftContainer>
                <ContentWrapper>
                    <Title>
                        <strong>Find</strong> all your favorite <strong>Pokémon</strong>
                    </Title>
                    <p>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </p>
                    <a href="/pokemons"><button>See Pokémons</button></a>
                </ContentWrapper>
            </LeftContainer>

            <RightContainer>
                <img src={pikachu}/>
            </RightContainer>
        </MainContainer>
    );
}

export default HomeContent;