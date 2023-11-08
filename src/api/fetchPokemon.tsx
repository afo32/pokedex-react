// https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}
import { PokemonDetails, GameIndex } from "../types/types";
import { formatPokemonName } from '../utils/utils';

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
    const formattedName = formatPokemonName(name);
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}`);

    if (!response.ok) {
        throw new Error(`Error fetching ${name}`);
    }

    const result = await response.json();
    const gameIndices: GameIndex[] = result.game_indices.map((index: { version: { name: string } }) => ({
        versionName: index.version.name
    }));


    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        gameIndices: gameIndices,
    };
    return pokemon;
}