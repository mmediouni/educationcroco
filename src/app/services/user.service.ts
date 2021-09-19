import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string='http://localhost:3000/users';
  constructor(private httpClient:HttpClient) { }
  // signup(){
  //   return this.httpClient.post<{}>(this.userURL,user);
  // }
}
