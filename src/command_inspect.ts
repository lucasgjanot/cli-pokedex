import { State } from "./state.js";

export async function CommandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }

    const pokemonName = args[0]

    const pokemon = state.pokedex[pokemonName];

    if (!pokemon) {
        throw new Error("you have not caught that pokemon")
    }

    console.log(
`Name: ${pokemon.name}
Height: ${pokemon.height}
Stats:
${pokemon.stats.map((stat) => ` -${stat.stat.name}: ${stat.base_stat}`).join("\n")}
Types:
${pokemon.types.map((type) => ` -${type.type.name}`).join("\n")}`);
}