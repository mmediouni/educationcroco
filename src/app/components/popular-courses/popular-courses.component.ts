import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
  courses:any;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    // this.courseService.getAllCourses().subscribe(
    //   (retourDuService)=>{
    //     this.courses = retourDuService.findedCourses;
    //   }
    // );
  }

}
