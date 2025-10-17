import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name")
    }
    const pokemonName = args[0];
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    const baseExp = pokemon.base_experience;

    const chance = Math.max(0.1, Math.min(0.9, 1 - baseExp / 500));

    const roll = Math.random();

    await waitWithDots(3)

    if (roll < chance) {
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`${pokemon.name} escaped!`)
    }

}



async function waitWithDots(seconds = 3) {
    for (let i = 0; i < seconds; i++) {
        process.stdout.write("."); // escreve um ponto sem quebra de linha
        await new Promise(res => setTimeout(res, 1000)); // espera 1 segundo
    }
    console.log(""); // quebra de linha no final
}