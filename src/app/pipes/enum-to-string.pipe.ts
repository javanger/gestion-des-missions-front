import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let monEnum: string = value;
    let str: string = "";

    str += monEnum.charAt(0);
    str += monEnum.substring(1, monEnum.length)
    .toLowerCase()
    .replace(/_/g, ' ');


    return str;
  }

}
