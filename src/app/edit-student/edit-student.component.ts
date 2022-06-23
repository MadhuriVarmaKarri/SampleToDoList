import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Input()id: any;
  editStudentId: any;

  constructor(private route: ActivatedRoute, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.editStudentId = this.router.snapshot.paramMap.get('editId');
  }
  
}
