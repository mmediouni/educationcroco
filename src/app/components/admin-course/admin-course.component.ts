import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  @Input() courseInput:any;
  constructor() { }

  ngOnInit() {
    
  }
  

}
