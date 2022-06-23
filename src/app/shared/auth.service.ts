import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validUsersList = [
    {
      name: 'Madhu',
      userName: 'madhu',
      pw: 'madhu123',
      role: 'Admin'
    },
    {
      name: 'Kusuma',
      userName: 'kusuma',
      pw: 'kussu123',
      role: 'student'
    },
    {
      name: 'Eswar',
      userName: 'eswar',
      pw: 'eswar123',
      role: 'Admin'
    },
    {
      name: 'Amma',
      userName: 'amma',
      pw: 'amma123',
      role: 'student'
    },
    {
      name: 'Raju',
      userName: 'RajuK',
      pw: 'raju123',
      role: 'Admin'
    },
    {
      name: 'samyuktha',
      userName: 'samyu',
      pw: 'sam123',
      role: 'student'
    }
  ]
  filtered: any;

  constructor() { }


  checkLoginCreds(userName: string, password: any) {
    return this.validUsersList.filter(el => {
      return el.userName === userName && el.pw === password
    })

  }

  loggedIn(){
    console.log(JSON.parse((localStorage.getItem("datas")!))[0].role == 'Admin');
    
    return JSON.parse((localStorage.getItem("datas")!))[0].role == 'Admin'
    // return  == 'Admin';
  }


}
