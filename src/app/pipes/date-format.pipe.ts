import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.year >= 2100) {
      return "Indéfinie";
    } else {
      return value.dayOfMonth + "/" + value.monthValue + "/" + value.year;
    }

  }
}
