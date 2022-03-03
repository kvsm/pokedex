import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generations, MainClient } from 'pokenode-ts';
import { defer, from, Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonDetails } from './pokemonDetails';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api: MainClient;

  constructor(private http: HttpClient) {
    this.api = new MainClient();
  }

  getPokemons(): Observable<Pokemon[]> {
    return defer(() => from(
      this.api.game.getGenerationById(Generations.GENERATION_I)
        .then((generation) => generation.pokemon_species)
    ));
  }

  getPokemonDetails(name: string): Observable<PokemonDetails> {
    return defer(() => from(
      this.api.pokemon.getPokemonByName(name)
    ));
  }
}

