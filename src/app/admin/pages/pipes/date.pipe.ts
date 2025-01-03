import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "rxjs";

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  constructor(private datePipe:DatePipe,) {
  }
  transform(value: unknown| undefined, ...args: unknown[]): string {
    //return this.datePipe.transform(new Date(), 'yyyy-MM-ddTh:mm:ssZZZZZ');
    return this.datePipe.transform(new Date(), 'M/d/yy, h:mm a');
    //return this.datePipe.transform(value?.toMillis(),'short')?? ''
  }

}
