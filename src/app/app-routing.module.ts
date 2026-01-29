import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/appointments',
    pathMatch: 'full'
  },
  {
    path: 'appointments',
    loadChildren: () => import('./features/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: '**',
    redirectTo: '/appointments'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
