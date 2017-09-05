import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToDatePipe',
})
export class StringToDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string): Date {  
    let dateArray= value.replace(/\D/g," ");
    return new Date(parseFloat(dateArray))
  }
}
