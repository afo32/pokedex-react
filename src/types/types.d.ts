export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
}

interface GameIndex {
    versionName: string;
    // Otras propiedades específicas de GameIndex, si las hay
}

export interface PokemonDetails {
    name: string;
    id: number;
    imgSrc: string;
    hp: number;
    attack: number;
    defense: number;
    gameIndices: GameIndex[];
    
}
