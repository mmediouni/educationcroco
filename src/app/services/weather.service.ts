import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl = 'http://localhost:3000/search';


  constructor(private httpClient:HttpClient) { }

  searchByCity(x){
     // return this.httpClient.post<{message:string}>(this.trainerUrl,trainer);
    return this.httpClient.post<{result:any}>(this.weatherUrl,x);
  }

}
