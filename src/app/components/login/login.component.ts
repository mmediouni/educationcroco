import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any = {};
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }
  login() {
    alert(' login btn ok ');
    console.log('here my form values', this.user);
    console.log('user pwd values', this.user.pwd);

  }
}
