import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listAvtarName',
})
export class ListAvtarName implements PipeTransform {
  transform(value: string): string {
   return value.charAt(0);
  }
}
