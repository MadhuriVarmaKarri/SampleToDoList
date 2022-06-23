import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

     
  }

  onLogin(data: any) {
    //this.authService.checkLoginCreds(userName, PW);
    const userName = data.userName;
    const password = data.password;

    let x = this.authService.checkLoginCreds(userName, password);
    console.log(x);

    localStorage.setItem("datas", JSON.stringify(x));
    x.length > 0 ? this.route.navigate(['/dashboard']) : alert('invalid credentials');
  }




}
