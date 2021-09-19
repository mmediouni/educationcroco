import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }
  usersData:any=[];
  ngOnInit() {
    this.usersData = [
      {
        id: 1,
        lastName: 'Mediouni',
        firstName: 'Hatem',
        tel: '97654321',
        email: 'hm@hm.com',
        pwd: 'hm@hm.com',
        dateOfBirth: '1994119',
        role: 'user',
        age: 29
      },
      {
        id: 2,
        lastName: 'Mediouni',
        firstName: 'Amel',
        tel: '93455129',
        email: 'am@am.com',
        pwd: 'am@am.com',
        dateOfBirth: '2001112',
        role: 'user',
        age: 17
      },
      {
        id: 3,
        lastName: 'Mediouni',
        firstName: 'Mohamed',
        tel: '96643928',
        email: 'mm@mm.mm',
        pwd: 'mm@mm.mm',
        dateOfBirth: '2012920',
        role: 'admin',
        age: 30
      }
    ];

  }

  displayUser(id){
    console.log('The User display ID is : ' , id);
  }
  editUser(id){
    console.log('The User edit ID is : ' , id);
  }
  deleteUser(id){
    console.log('The User delete ID is : ' , id);
  }

  countAge(dob){
    // var dob = '19800810';
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var dateOfBirth = `${day}/${month}/${year}`;
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    // alert(age);
    return [age , dateOfBirth]
  }

}
