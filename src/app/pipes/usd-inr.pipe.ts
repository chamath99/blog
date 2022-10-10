import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: number, ...args: number[]): unknown {
    // return null;
    const [price]=args;
    return value*price;
  }

}
