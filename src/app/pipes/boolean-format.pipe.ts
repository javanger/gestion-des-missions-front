import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanFormat'
})
export class BooleanFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value == true) {
      return "Oui";
    } else {
      return "Non";
    }

  }

}
