import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Location} from '@angular/common';




@Injectable({
  providedIn: 'root'
})



export class DataService {
  public buttonClickEventTrack = new BehaviorSubject(null);

  constructor(private http: HttpClient, private _location: Location) { }
  URL = "http://localhost:3000/studentList"

  postData(data: any) {
    return this.http.post(this.URL, data)
  }

  getData() {
    return this.http.get(this.URL)
  }

  getCurrentData(editId: number) {
    return this.http.get(`${this.URL}/${editId}`)
  }
  
  updateData(id: number, data: any) {
    return this.http.put(`${this.URL}/${id}`, data)
  }
  deleteData(id: number){
    return this.http.delete(`${this.URL}/${id}`);
  }
   goBack(){
    this._location.back();
   }
}
