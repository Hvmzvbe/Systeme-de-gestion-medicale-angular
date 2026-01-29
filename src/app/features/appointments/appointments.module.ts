import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppointmentsRoutingModule } from './appointments-routing.module';

import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppointmentCalendarComponent,
    AppointmentFormComponent,
    AppointmentDetailComponent,
    DoctorListComponent
  ],
  imports: [
    SharedModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
