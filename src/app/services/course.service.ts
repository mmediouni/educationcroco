import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseUrl = 'http://localhost:3000/courses';
  trainerUrl = 'http://localhost:3000/trainers';

  constructor(private httpClient:HttpClient) { }
  // getAllCourses(){
  //   return this.httpClient.get<{findedCourses:any}>(this.courseUrl);
  // }

  getAllCourses(){
    return this.httpClient.get<{foundedCourses:any}>(this.courseUrl);
  }

  getAllTrainers(){
    return this.httpClient.get(this.trainerUrl);
  }

  getCourseById(id){
    return this.httpClient.get(`${this.courseUrl}/${id}`);
  }
  deleteCourse(id){
    return this.httpClient.delete(`${this.courseUrl}/${id}`); 
  }


  addCourse(course:any){
    return this.httpClient.post<{message:string}>(this.courseUrl,course);
  }
  editCourse(course:any){
    return this.httpClient.put(`${this.courseUrl}/${course.id}`,course);
  }
}
