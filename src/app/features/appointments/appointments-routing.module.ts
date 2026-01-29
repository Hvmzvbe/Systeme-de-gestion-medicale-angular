import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppointmentCalendarComponent 
  },
  { 
    path: 'new', 
    component: AppointmentFormComponent 
  },
  { 
    path: 'doctors', 
    component: DoctorListComponent 
  },
  { 
    path: ':id', 
    component: AppointmentDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
