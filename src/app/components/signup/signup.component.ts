import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { MustMatch } from "src/app/validators/mustMatch";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder,
    private userService:UserService) {}

  ngOnInit() {
    // this.signupForm = this.fb.group({
    //   firstName: ['',[Validators.minLength(5), Validators.required]],
    //   lastName: ['',[Validators.minLength(3), Validators.required]],
    //   email: ['', Validators.email],
    //   pwd: ['', [Validators.minLength(3),Validators.maxLength(12)]],
    //   confirmPwd: ['']
    // })

    this.signupForm = this.fb.group(
      {
        firstName: ["", [Validators.minLength(5), Validators.required]],
        lastName: ["", Validators.minLength(4)],
        email: ["", [Validators.email, Validators.required]],
        pwd: ["", [Validators.minLength(8), Validators.maxLength(12)]],
        confirmPwd: [""],
        // tel: [""],
      },
      { validator: MustMatch("pwd", "confirmPwd") }
    );
  }
  // signup() {
  //   console.log("here my objetct", this.signupForm.value);
  //   this.userService.signup()
  // }
}