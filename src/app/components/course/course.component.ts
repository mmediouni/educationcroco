import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  //@Input() courseInput:any; est une variable globlale 
  @Input() courseInput:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  plural(nbr:number){
    if (nbr >=2) {
      return 'Students';
    } else{
      return 'Student';
    }
    //ou
    // return (nbr >=2) ? 'students' : 'student';
  }

  priceColor(price:number){
    if (price >= 0 && price<=1000) {
      return ["0",'green','30px'];
    } 
    else if(price > 1000 && price<=2000){
      return ["1",'orange','20px'];
    }
    else{
      return ["2",'red','10px'];
    }
  }

  goToDisplay(id){
    this.router.navigate([`displayCourse/${id}`])
  }

}
