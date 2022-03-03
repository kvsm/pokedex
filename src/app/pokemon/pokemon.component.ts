import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetails } from '../pokemonDetails';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon?: PokemonDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
