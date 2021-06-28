import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {
  transform(value: Date | undefined) {
    if (value) {

      //
      const dateNow = new Date();
      const diffTime = Math.abs((dateNow as any) - (value as any));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60 )) % 24;
      const diffMins = Math.ceil(diffTime / (1000 * 60)) % 60;
      return value < dateNow ? `${diffDays} days ${diffHours} hours ${diffMins} minutes passed` :
       ` last  ${diffDays} days ${diffHours} hours ${diffMins} minutes`;

    }
    else return null;
  }

}


// Argument of type 'string' is not assignable to parameter of type 'number'.ngtsc(2345) nasıl çözerim?
