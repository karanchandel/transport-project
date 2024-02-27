import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor( private fb: FormBuilder ,private router: Router) {}

  ngOnInit() {

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    
  }

 


//   onlogin(loginForm: any): void {
//     let url = environment.login
//  console.log(this.loginForm.value)
//     this.restser.post(url, {data: this.loginForm.value}, {}).subscribe(res => {
//       console.log(res)

//     })
//   }
 
}
 
  

