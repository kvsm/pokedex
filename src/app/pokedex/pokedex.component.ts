import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';
import { PokemonDetails } from '../pokemonDetails';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
    pokedex: PokemonDetails[] = [];
    term = '';

    constructor(
        private pokemonService: PokemonService,
        public searchService: SearchService
    ) { }

    ngOnInit(): void {
        this.getPokemon();
    }

    getPokemon(): void {
        this.pokemonService.getPokemons()
            .pipe(
                mergeMap(pokemons => {
                    return pokemons.map(pokemon => {
                        return this.pokemonService.getPokemonDetails(pokemon.name);
                    });
                })
            ).pipe(mergeMap(details => details))
            .subscribe(pokemonDetails => {
                this.pokedex[pokemonDetails.id - 1] = pokemonDetails;
            });
    }
}
