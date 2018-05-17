import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pourcentagePrime'
})
export class PourcentagePrimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value != null) {
      return value + " %";
    } else {
      return "";
    }
  }

}
