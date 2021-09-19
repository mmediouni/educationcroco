import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm:FormGroup; 
  course:any={};
  id:any={};
  text:any={};
  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private courseService:CourseService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.text = 'Edit';
    } else {
      this.text = 'Add';
    }
    this.courseForm = this.fb.group({
      name: [''],
      price: [''],
      trainer: [''],
      duration: [''],
      capacity: ['']
    })
  }
  submitEditCourse(){
    
    if (this.id) {
      console.log('here is my edit courses infos: ' ,this.course);
    } else {
      console.log('here is my add courses infos: ' ,this.course);
      this.courseService.addCourse(this.course).subscribe(
        (data)=>{
          console.log('here data from BE after add course', data.message);
          this.router.navigate(['']);
        }
      );
    }
    
  }
}
