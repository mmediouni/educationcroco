import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayHide'
})
export class DisplayHidePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
