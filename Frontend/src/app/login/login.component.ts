import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/login.service';
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

  constructor(private fb: FormBuilder ,private router: Router, private loginService:LoginService) {}

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // Implement your login logic here
  //  console.log('Logging in:', this.loginForm.value);
   //
   
   
   this.loginService.login(this.loginForm.value).pipe(timeout(20000)).subscribe(res => {
    // if (!res.userType) {
      // this.loading = false;
      if (res.message == "Logged Successfully!!") {
        // this.sessServ.saveUser(res.user);
        // this.sessServ.saveToken(res.accessToken);
        // this.sessServ.saveSessTime();
        // this.notiService.showSuccess(res.message);
       this.router.navigate(['/dashboard']);
      }})
      console.log("Wrong credentials");
      
      // this.router.navigate(['/dashboard']);
   // }
  }
  signup(){
    this.router.navigate(['/signup'])
  }
}
 
  
 
 
  


function forgotPassword() {
  throw new Error('Function not implemented.');
}

