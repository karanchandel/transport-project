import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/core/rest.service';
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

  constructor( private http: HttpClient,private fb: FormBuilder ,private router: Router, private restServ: RestService,private restser: RestService) {}

  ngOnInit() {

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
      });
  }
  onlogin(loginForm: any): void {
    let url = 'http://localhost:6000/users/login'
 console.log(this.loginForm.value)
    this.restser.post(url, {data: this.loginForm.value}, {}).subscribe(res => {
      console.log(res)
    })  
 }
}
 
  

