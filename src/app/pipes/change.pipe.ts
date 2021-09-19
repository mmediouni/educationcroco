import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(ch: string): any {
    let result = '';
    // let inter = '';
    // let j = 0;
    // console.log(ch);

    result = ch.replace('Ai','ay');
    result =  result.replace('ai','ay');
    console.log(result);
    return result;

    
    

    
//   function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substring(0,index) + chr + str.substring(index+1);
// }




    for (let i = 0; i < ch.length; i++) {
      result = result + ch[i];
      console.log(result);
      if ((ch[i] == 'a' && ch[i + 1] == 'i') || (ch[i] == 'A' && ch[i + 1] == 'i')) {
       
          // var str = ch;
          // str = setCharAt(ch,i,'Ay');
      
    
        



      //   result = result + 'y';
      //   j = i + 2;

      //   for (let i = j; i < ch.length; i++) {
      //     result = result + ch[i];
          
      //   }
      //   break;
      // }
   // }
    //  return str;
 // }
      }}}}
