import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, DoctorSearchFilters, Specialty, DoctorStatus } from '../../../core/models/doctor.model';
import { DoctorService } from '../../../core/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];
  loading = true;
  error: string | null = null;

  // Filters
  filters: DoctorSearchFilters = {};
  searchTerm = '';
  selectedSpecialty: Specialty | '' = '';
  selectedStatus: DoctorStatus | '' = '';
  sortBy: 'rating' | 'availability' | 'experience' = 'rating';

  // Enums for template
  Specialty = Specialty;
  DoctorStatus = DoctorStatus;
  
  specialties = Object.values(Specialty);
  statuses = Object.values(DoctorStatus);

  // Pagination
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 1;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.loading = true;
    this.error = null;

    this.doctorService.getAllDoctors().subscribe({
      next: (doctors) => {
        this.doctors = doctors;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load doctors';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    let result = [...this.doctors];

    // Search filter
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(doctor =>
        `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(term) ||
        doctor.email.toLowerCase().includes(term)
      );
    }

    // Specialty filter
    if (this.selectedSpecialty) {
      result = result.filter(doctor => doctor.specialty === this.selectedSpecialty);
    }

    // Status filter
    if (this.selectedStatus) {
      result = result.filter(doctor => doctor.status === this.selectedStatus);
    }

    // Sort
    result = this.sortDoctors(result);

    this.filteredDoctors = result;
    this.totalPages = Math.ceil(result.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  sortDoctors(doctors: Doctor[]): Doctor[] {
    return doctors.sort((a, b) => {
      switch (this.sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'availability':
          const statusOrder = { AVAILABLE: 0, BUSY: 1, OFFLINE: 2, ON_LEAVE: 3 };
          return statusOrder[a.status] - statusOrder[b.status];
        case 'experience':
          return (b.experience || 0) - (a.experience || 0);
        default:
          return 0;
      }
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onSpecialtyChange(): void {
    this.applyFilters();
  }

  onStatusChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  getPaginatedDoctors(): Doctor[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredDoctors.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (this.currentPage > 3) {
        pages.push(-1); // Ellipsis
      }
      
      for (let i = Math.max(2, this.currentPage - 1); i <= Math.min(this.totalPages - 1, this.currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (this.currentPage < this.totalPages - 2) {
        pages.push(-1); // Ellipsis
      }
      
      pages.push(this.totalPages);
    }
    
    return pages;
  }

  bookAppointment(doctor: Doctor): void {
    this.router.navigate(['/appointments/new'], {
      queryParams: { doctorId: doctor.id }
    });
  }

  viewDoctor(doctor: Doctor): void {
    // Navigate to doctor details (if implemented)
    console.log('View doctor:', doctor);
  }

  getFullName(doctor: Doctor): string {
    return this.doctorService.getFullName(doctor);
  }

  getSpecialtyColor(specialty: Specialty): string {
    return this.doctorService.getSpecialtyColor(specialty);
  }

  getStatusBadgeClass(status: DoctorStatus): string {
    return this.doctorService.getStatusBadgeClass(status);
  }

  getStatusLabel(status: DoctorStatus): string {
    return this.doctorService.getStatusLabel(status);
  }

  getRatingStars(rating: number): { full: number; half: number; empty: number } {
    return this.doctorService.getRatingStars(rating);
  }

  getTodayAvailability(doctor: Doctor): string {
    return this.doctorService.getTodayAvailability(doctor);
  }

  isAvailableToday(doctor: Doctor): boolean {
    return this.doctorService.isAvailableToday(doctor);
  }

  getResultsRange(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.filteredDoctors.length);
    return `${start} to ${end} of ${this.filteredDoctors.length}`;
  }
}
