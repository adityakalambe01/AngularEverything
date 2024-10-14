import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedRole: string = '';
  deptService = inject(DepartmentService);
  onRoleChange(role: string) {
    debugger;
    this.deptService.onRoleChange$.next(role);
  }

  router = inject(Router);
  logout(): void {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('');
  }
  constructor() {
    const data = localStorage.getItem('loginUser');
    if (data !== null) {
      console.log(JSON.parse(data));
      // JSON.parse(localStorage.getItem('loginUser'));
    }
  }
}
