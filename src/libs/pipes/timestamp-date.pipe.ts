import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampDateFormat',
})
export class TimestampDateFormatPipe implements PipeTransform {
  transform(value: number | undefined) {
    if (value && !isNaN(value)) {
      const date1 = new Date(value * 1000);
      const date2 = new Date();
      const diffTime = Math.abs((date2 as any) - (date1 as any));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");

      return new Date(value * 1000);
      // return hours.toString().length > 1
      //   ? minutes.toString().length > 1
      //     ? days.toString().length > 1
      //       ? months.toString().length > 1
      //         ? years.toString().length > 1
      //           ? `${years}/${months}/ ${days} ${hours}:${minutes}`
      //           : `${years}/${months}/ ${days} ${hours}:0${minutes}`
      //         : minutes.toString().length > 1
      //           ? `${years}/${months}/ ${days} 0${hours}:${minutes}`
      //           : `${years}/${months}/ ${days} 0${hours}:0${minutes}`
      //       : days.toString().length > 1
      //         ? `${years}/${months}/ 0${days} 0${hours}:${minutes}`
      //         : `${years}/${months}/ 0${days} 0${hours}:0${minutes}`
      //     : months.toString().length > 1
      //       ? `${years}/ 0${months}/ 0${days} 0${hours}:${minutes}`
      //       : `${years}/ 0${months}/ 0${days} 0${hours}:0${minutes}`
      //   : years.toString().length > 1
      //     ? `${years}/ 0${months}/ 0${days} 0${hours}:${minutes}`
      //     : `${years}/ 0${months}/ 0${days} 0${hours}:0${minutes}`;
    }
    else return null;
  }
  //todo: 1 pipe daha countdown yapsın
  //2 pipe aynı anda kullanabilirsin
}
