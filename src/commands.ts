import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMapBack, commandMapForward } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { CommandInspect } from "./command_inspect.js";
import { CommandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string,CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp
        },
        map: {
            name: "map",
            description: "Get the next page of locations",
            callback: commandMapForward
        },
        mapb: {
            name: "mapb",
            description: "Get the previous page of locations",
            callback: commandMapBack
        },
        explore: {
            name: "explore",
            description: "Show list of Pokemons in a given area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Atempts to catch a pokemon",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Inspect a caught pokemon",
            callback: CommandInspect
        }, 
        pokedex: {
            name: "pokedex",
            description: "See all caught pokemons",
            callback: CommandPokedex
        },
    };
}



