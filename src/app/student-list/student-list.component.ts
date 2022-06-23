import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name',  'course', 'DOJ', 'action'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getStudentList();

  }
    getStudentList(){
      this.dataService.getData()
      .subscribe({
        next: (res: any)=>{
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
          
        }, error: ()=>{
          alert("error while fetching the record!!")
        }
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
 
    onDelete(id: number){
      this.dataService.deleteData(id).subscribe(()=>{
        alert(`Employee with id ${id} deleted`);
      });
    }
    goBack(){
      this.dataService.goBack();
    }
}
