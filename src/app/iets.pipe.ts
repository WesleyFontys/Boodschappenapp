import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iets'
})
export class IetsPipe implements PipeTransform {

  transform(value: Array<Element>, ...args: unknown[]): unknown {
    debugger;
    value.sort((a: any, b: any) => {
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }

}
