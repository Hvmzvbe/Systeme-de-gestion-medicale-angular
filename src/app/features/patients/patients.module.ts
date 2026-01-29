import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/components/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { DossierFormComponent } from '../dossiers/dossier-form/dossier-form.component';

@NgModule({
  declarations: [
    PatientDetailComponent,
    DossierFormComponent
  ],
  imports: [
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
