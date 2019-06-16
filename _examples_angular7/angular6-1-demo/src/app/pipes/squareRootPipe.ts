import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRootPipe'
})

export class SquareRootPipe implements PipeTransform {
  transform(curValue: number): number {
    return Math.sqrt(curValue);
  }

}