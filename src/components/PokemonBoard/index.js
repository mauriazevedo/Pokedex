import React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPokemon } from "./../../services/pokemonService";
import { CardPokemon, FirstLine, LeftContainer, RightContainer, WrapperCard, Abilities} from "./style";

function PokemonBoard() {
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try{
                const data = await getPokemon(id);
                setPokemon(data);
            }catch {
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        })();
    }, [id]);

    if(isError){
        return(
            <Navigate to="/notfound" />
        )
    }

    if(isLoading){
        return(
            <h1>carregando</h1>
        )
    }

    const pokeImage = pokemon["sprites"]["other"]["official-artwork"]["front_default"];
    const pokeAbilities = pokemon.abilities;
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.substr(1);

    return(
        <WrapperCard>
            <CardPokemon>
                <LeftContainer>
                    <img src={pokeImage} />
                </LeftContainer>

                <RightContainer>
                    <FirstLine>
                        <h2>{pokeName}</h2>
                        <span>#{pokemon.id}</span>
                    </FirstLine>

                    <Abilities>
                        <p>Abilities</p>
                        <ul>
                            {pokeAbilities.map((value) => (<li>{value.ability.name}</li>))}
                        </ul>
                    </Abilities>
                </RightContainer>
            </CardPokemon>
        </WrapperCard>
    );
}

export default PokemonBoard;