import { Component, Input, OnInit } from '@angular/core';





@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() isEditComp: any;

  constructor() { }

  ngOnInit(): void {
  }
 
}
