import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,  
    ) {}

  ngOnInit() {
    this.initSignupForm();
  }

  private initSignupForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // signup() {
  //   this.signupService.signUp(this.signupForm.value).subscribe(res => {
  //     // console.log("===", res)
  //     if (res["body"].status == 1) {
  //       this.router.navigate([''])
  //     }
  //   })
    
  //   // Implement your signup logic here

  //   console.log('Signing up:', this.signupForm.value);
  // }
  login() {
    this.router.navigate(["/login"])
  }
}
