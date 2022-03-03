import { Pipe, PipeTransform } from '@angular/core';
import { HasName } from './has-name';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: HasName[], term: string): any[] {
    if (!items) return [];
    if (!term) return items;
    term = term.toLocaleLowerCase();

    return items.filter(item => item.name.toLocaleLowerCase().includes(term));
  }

}
