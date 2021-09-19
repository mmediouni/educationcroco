import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  coursesData: any;
  
  constructor(
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.coursesData = data.foundedCourses;
      }

    );
    console.log(this.coursesData);

    // this.coursesData = [
    //   {
    //     id: 1,
    //     trainer: 'Abderrahmen Masmoudi',
    //     price: 1200,
    //     capacity: 10,
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

    // localStorage.setItem('myCat', 'Todm');
    // localStorage.setItem('coursesData', JSON.stringify(this.coursesData) );

  }

  goToDisplayCourse(id: number) {
    // console.log('The target display ID is : ' , id);
    this.router.navigate([`diplayCourse/${id}`])
  }
  goToEditCourse(id: number) {
    this.router.navigate([`edit-course/${id}`])
  }
  deleteCourse(id) {
    console.log('The target delete ID is : ', id);
  }
}