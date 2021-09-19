import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css']
})
export class DisplayCourseComponent implements OnInit {
id:any;
course:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private courseService:CourseService
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('your ID is : ',this.id);
    // this.courseService.getCourseById(this.id).subscribe(
    //   (retourDuService)=>
    // )
    
  }

}
