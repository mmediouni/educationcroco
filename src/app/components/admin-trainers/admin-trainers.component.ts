import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-admin-trainers',
  templateUrl: './admin-trainers.component.html',
  styleUrls: ['./admin-trainers.component.css']
})
export class AdminTrainersComponent implements OnInit {
  trainersData:any=[];
  constructor(private trainerService:TrainerService) { }

  ngOnInit() {
    this.trainerService.getAllTrainers().subscribe(
      (data) => {
        this.trainersData = data.foundedTrainers;
      }

    );
    console.log(this.trainersData);
    // this.trainersData = JSON.parse(localStorage.getItem('coursesData'));
    // console.log(this.trainersData);
    
  }
  displayTrainer(id){
    console.log('The Trainer display ID is : ' , id);
  }
  editTrainer(id){
    console.log('The Trainer edit ID is : ' , id);
  }
  deleteTrainer(id){
    console.log('The Trainer delete ID is : ' , id);
  }
}
