import { API_URL } from "./pokeAPI";

export const getPokemon = async (id) => {
    const pokemon = await fetch(`${API_URL}pokemon/${id}`)
        .then(
            (res) => {
                return res.json();
            })
        .then(
            (json) => {
                return json;
            }
        )

    return pokemon;
}



