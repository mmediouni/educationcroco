import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm:FormGroup;
  weather:any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    private router:Router) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group(
      {
        city: [""]
      }
    );
  }
  searchByCity(){
    this.weatherService.searchByCity(this.weather).subscribe(
      (data)=>{
        console.log('here data from BE after get weather', data.result);
      }
    );
  };

}
