import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PatientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
