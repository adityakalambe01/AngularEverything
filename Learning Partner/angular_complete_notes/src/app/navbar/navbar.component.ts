import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
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
