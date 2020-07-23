import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePl',
})
export class DatePlPipe implements PipeTransform {
  transform(date: Date, ...args: unknown[]): unknown {
    const strDate = '' + date;
    const month = strDate.substring(4, 7);
    let day = strDate.substring(8, 10);
    const year = strDate.substring(11, 15);

    if (day[0] === '0') {
      day = day[1];
    }

    switch (month) {
      case 'Jan':
        return day + ' Stycznia ' + year + ' roku';
      case 'Feb':
        return day + ' Lutego ' + year + ' roku';
      case 'Mar':
        return day + ' Marca ' + year + ' roku';
      case 'Apr':
        return day + ' Kwietnia ' + year + ' roku';
      case 'May':
        return day + ' Maja ' + year + ' roku';
      case 'Jun':
        return day + ' Czerwca ' + year + ' roku';
      case 'Jul':
        return day + ' Lipca ' + year + ' roku';
      case 'Aug':
        return day + ' Sierpnia ' + year + ' roku';
      case 'Sep':
        return day + ' Września ' + year + ' roku';
      case 'Oct':
        return day + ' Października ' + year + ' roku';
      case 'Nov':
        return day + ' Listopada ' + year + ' roku';
      case 'Dec':
        return day + ' Grudnia ' + year + ' roku';
    }

    return strDate;
  }
}
