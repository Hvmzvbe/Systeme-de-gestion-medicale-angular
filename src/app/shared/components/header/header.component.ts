import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = 'Medical Management System';
  @Output() sidebarToggle = new EventEmitter<void>();
  
  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }
}
