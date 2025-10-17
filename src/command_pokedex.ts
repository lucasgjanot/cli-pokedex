import { State } from "./state.js";

export async function CommandPokedex(state: State) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("You haven't caught any pokemons yet!");

    } else {
        console.log("Your Pokedex:");
        Object.values(state.pokedex).forEach( pokemon => {
            console.log(` - ${pokemon.name}`);
        })
    }  
}