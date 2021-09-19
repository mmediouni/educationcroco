import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesData: any = [];
  constructor(courseService:CourseService) { }

  ngOnInit() {
    // this.coursesData = [
    //   {
    //     id: 1,
    //     trainer: 'Abderrahmen Masmoudi',
    //     price: 1200,
    //     capacity: 1,
    //     description: 'Learn Angular',
    //     name: 'Angular',
    //     date: new Date()
        
    //   },
    //   {
    //     id: 2,
    //     trainer: 'Aidai',
    //     price: 4000,
    //     capacity: 43,
    //     description: 'Learn HTML',
    //     name: 'HTML',
    //     date: new Date()
    //   },
    //   {
    //     id: 3,
    //     trainer: 'Ali Tainsi',
    //     price: 200,
    //     capacity: 3,
    //     description: 'Learn Bootstrap',
    //     name: 'Bootstrap',
    //     date: new Date()
    //   },
    //   {
    //     id: 4,
    //     trainer: 'Hatem Mediouni',
    //     price: 2400,
    //     capacity: 30,
    //     description: 'Learn PHP',
    //     name: 'PHP',
    //     date: new Date()
    //   },
    // ];

    // this.courseService.getAllCourses().subscribe(
    //   (retourDuService)=>{
    //     this.courses = retourDuService.findedCourses;
    //   }
    // );
   
  }
  
}
