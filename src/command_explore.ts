import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]) {
    const pokemons: string[] = []
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }
    const locationName = args[0]
    try {
        const data = await state.pokeAPI.fetchLocation(locationName);
    for (const encounter of data.pokemon_encounters) {
        pokemons.push(encounter.pokemon.name);
    }
    console.log(`Exploring ${locationName}...`)

    if (!data || !data.pokemon_encounters || data.pokemon_encounters.length === 0) {
            throw new Error("No Pokémon found in this area.");
        }
    console.log(`Found Pokemon:`)
    for (const pokemon of pokemons) {
        console.log(pokemon)
    }
    } catch (err) {
        const message = (err as Error).message;

        if (message.includes("404")) {
            console.log(`❌ Location '${locationName}' not found.`);
        } else {
            console.error(`⚠️ Error exploring '${locationName}': ${message}`);
        }
    }
    
}