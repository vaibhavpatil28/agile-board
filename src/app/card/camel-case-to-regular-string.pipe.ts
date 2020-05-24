import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToRegularString'
})
export class CamelCaseToRegularStringPipe implements PipeTransform {
  transform(value: string): any {
    let regularString = '';
    value.split('').map(char => {
      if (/[A-Z]/.test(char)) {
        regularString += ' ';
      }
      regularString += char;
    });
    regularString = regularString.charAt(0).toUpperCase() + regularString.slice(1);

    return regularString;
  }
}
