import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalCoste'
})
export class TotalCostePipe implements PipeTransform {

  transform(op1: number, op2?: number): number {
    if (op1 === null || op2 === null || op1 === undefined || op2 === undefined) {
      return -1;
    } else { return op1 * op2; }
  }
}
