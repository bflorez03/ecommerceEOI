import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './entities/item.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(items: Item[], args?: string): any {
    if (items !== undefined) {
      return items.reduce((prev, current) => prev + current[args], 0);
    }
    /*     if (args === 'stock') {
          return items.reduce((prev, current) => prev + current.stock, 0);
        } else if (args === 'price') {
          return items.reduce((prev, current) => prev + current.price, 0);
        } else {
          return 'Error, argumento no valido para este pipe';
        } */
  }
}
