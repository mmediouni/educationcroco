import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {
  addTrainerForm:FormGroup;
  trainer:any={};
  imagePreview:string;

  constructor(
    private formBuilder: FormBuilder,
    private trainerService:TrainerService,
    private router:Router) { }

  ngOnInit() {
    this.addTrainerForm = this.formBuilder.group(
      {
        firstName: [""],
        lastName: [""],
        email: [""],
        experience: [""],
        speciality: [""],
        img:[""]
      }
    );
  }
  addTrainer(){
    this.trainerService.addTrainer(this.addTrainerForm.value,this.addTrainerForm.value.img).subscribe(
      (data)=>{
        console.log('here data from BE after add trainer', data.message);
        this.router.navigate(['admin']);
      }
    );
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addTrainerForm.patchValue({ img: file });
    this.addTrainerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
