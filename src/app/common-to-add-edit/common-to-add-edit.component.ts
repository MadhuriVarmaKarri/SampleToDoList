import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { StudentModel } from '../shared/student.model';

@Component({
  selector: 'app-common-to-add-edit',
  templateUrl: './common-to-add-edit.component.html',
  styleUrls: ['./common-to-add-edit.component.css']
})
export class CommonToAddEditComponent implements OnInit {
  @Input() isEditComp: any;
  @Input() editStudentId: any;
  result: any;
  studentForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private route: Router) { }

  ngOnInit(): void {


    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      course: ['', Validators.required],
      id: ['', Validators.required],
      DOJ: ['', Validators.required]
    })


    this.dataService.getCurrentData(this.editStudentId).subscribe((res) => {
      this.result = res;

      this.studentForm.setValue({ name: this.result.name, course: this.result.course, id: this.result.id, DOJ: this.result.DOJ })

    })

  }
  addStudent(x: any) {

    if (this.studentForm.valid) {
      this.dataService.postData(this.studentForm.value)
        .subscribe({
          next: (res) => {
            alert("Student added successfully")
          }, error: () => {
            alert("Error while adding student")
          }
        })
    }
    this.route.navigate(['dashboard/student-list'])
  }
  updateData() {
    console.log(this.studentForm.value);
    this.dataService.updateData(this.editStudentId, this.studentForm.value)
      .subscribe((res) => {
        console.log(res);
        this.route.navigate(['dashboard/student-list']);
      })
  }

  onClose() {
    this.studentForm.reset();
  }
  goBack(){
    this.dataService.goBack();
  }
}
