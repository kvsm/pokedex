import { PokemonSprites } from 'pokenode-ts';

export interface PokemonDetails {
    id: number;
    name: string;
    sprites: PokemonSprites;
    order: number;
}
