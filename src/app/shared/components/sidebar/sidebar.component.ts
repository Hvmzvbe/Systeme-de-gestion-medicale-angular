import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      active: false
    },
    {
      icon: 'calendar_month',
      label: 'Appointments',
      route: '/appointments',
      active: true
    },
    {
      icon: 'group',
      label: 'Patients',
      route: '/patients',
      active: false
    },
    {
      icon: 'stethoscope',
      label: 'Doctors',
      route: '/appointments/doctors',
      active: false
    },
    {
      icon: 'medical_services',
      label: 'Services',
      route: '/services',
      active: false
    },
    {
      icon: 'analytics',
      label: 'Reports',
      route: '/reports',
      active: false
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings',
      active: false
    }
  ];
}
