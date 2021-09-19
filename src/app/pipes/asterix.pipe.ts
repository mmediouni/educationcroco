import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string): any {
  //   console.log('toute la chaine : ', ch);
  //   let res = '';
  //   for (let i = 0; i < ch.length; i++) {
  //     if (!(ch[i] == 'a' || ch[i] == 'e' || ch[i] == 'i' || ch[i] == 'o' || ch[i] == 'u' || ch[i] == 'y')) {
  //       res = res + '*';
  //     }
  //     else {
  //       res = res + ch[i];
  //     }
  //     console.log('resultat : ', res);
  //   }
  //   return res;

  //================METHODE2==============
let voyels = ['a','u','e','o','i','y'];
let result='';
  for (let i = 0; i < ch.length; i++) {
    let inter = ch[i];
    for (let j = 0; j < voyels.length; j++) {
      if (ch[i] == voyels[j]) {
        inter =  '*';
      }
    }
    result = result + inter;
  }
  return result;
}
}
