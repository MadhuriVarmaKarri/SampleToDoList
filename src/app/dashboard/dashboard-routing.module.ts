import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { AuthGuard } from '../shared/auth.guard';
import { StudentListComponent } from '../student-list/student-list.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'add-student', component: AddStudentComponent, canActivate: [AuthGuard] },
      { path: 'student-list', component: StudentListComponent },
      { path: 'edit-student/:editId', component: EditStudentComponent, canActivate: [AuthGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'student-list' }
    ]
  },

];

@NgModule({
  imports: [
    // RouterModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
