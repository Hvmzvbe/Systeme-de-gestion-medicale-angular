import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Medical Management System';
  sidebarOpen = true;

  ngOnInit(): void {
    // Initialize dark mode from localStorage
    this.initializeDarkMode();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  private initializeDarkMode(): void {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }
}
