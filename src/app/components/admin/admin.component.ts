import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 mouseOver:any = 80;
 timef:any = 10;
 msg:any = '';
 
  constructor() { }

  ngOnInit() {
    
    
  }
  onMouseOver(){
    this.mouseOver = this.mouseOver + 1;
    if (this.mouseOver == 100) {
      this.msg = ' : You Win by Mouse Over';
      }
    console.log(this.mouseOver);

  }
  onMouseLeft(){
    this.mouseOver = this.mouseOver + 100;
    if (this.mouseOver > 100) {
      this.mouseOver == 200;
      }
  }
  onClick(){
    this.mouseOver = this.mouseOver + 1;
    if (this.mouseOver > 100) {
      this.mouseOver == 300;
      }
  }

  onClickReset(){
  
    console.log('onClickReset : ', this.mouseOver);
    var x = setInterval(() => {
      this.mouseOver = this.mouseOver - 1;
      if (this.mouseOver == 10) {
        this.msg = ' : You Win';
        clearTimeout(x);
        }
    }, this.timef);

    
    
    
    // this.mouseOver = 0;
  }

 

}
