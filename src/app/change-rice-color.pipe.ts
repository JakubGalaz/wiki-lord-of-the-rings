import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'changeRiceColor',
})
export class ChangeRiceColorPipe implements PipeTransform {
  transform(text: string): string {
    if (text === 'postaciach') {
      const str = '<p> [style]="{ color: \'blue\' }" ' + text + '</p>';
      console.log(str);
      return str;
    }
    return text;
  }
}
