import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string): any {
    let result='';
    let lastIndex = ch[ch.length];
    for (let i = 0; i < ch.length; i++) {
      result = ch[i] +result;

      
      
    }
    return result;
  }

}