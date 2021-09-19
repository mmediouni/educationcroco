import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  trainerUrl = 'http://localhost:3000/trainers';


  constructor(private httpClient:HttpClient) { }

  addTrainer(trainer:any, img:File){
     // return this.httpClient.post<{message:string}>(this.trainerUrl,trainer);
    let formData = new FormData();
    formData.append('firstName', trainer.firstName);
    formData.append('lastName', trainer.lastName);
    formData.append('speciality', trainer.speciality);
    formData.append('experience', trainer.experience);
    formData.append('img', img);
    return this.httpClient.post<{message:string}>(this.trainerUrl,formData);
  }

  getAllTrainers(){
    return this.httpClient.get<{foundedTrainers:any}>(this.trainerUrl);
  }
}
