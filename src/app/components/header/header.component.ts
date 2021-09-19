import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  indicatif:number=21655442295;
  constructor() { }

  ngOnInit() {
    // alert('hello header');
  }
  
  
  
  calcul(a,b){
    return a+b;
  }

  findedVal(){
    let T=[8,10,-6,9];
    let count = 0;
    for (let i = 0; i < T.length; i++) {
      if (T[i]<0) {
        count = count+1;
      }
      
    }
    return count;
  }


}
