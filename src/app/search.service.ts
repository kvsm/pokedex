import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  term: string = '';

  constructor() { }

  updateTerm(term: string) {
    this.term = term;
  }
}
