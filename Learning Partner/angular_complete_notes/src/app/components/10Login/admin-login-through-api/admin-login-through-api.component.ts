import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-through-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login-through-api.component.html',
  styleUrl: './admin-login-through-api.component.css',
})
export class AdminLoginThroughApiComponent {
  http = inject(HttpClient);
  router = inject(Router);

  userObject: any = {
    EmailId: '',
    Password: '',
  };


  onLogin(): void {
    this.http.post('https://projectapi.gerasim.in/api/UserApp/login', this.userObject)
    .subscribe((res:any)=>{
      if (res.result) {
        localStorage.setItem('loginUser', JSON.stringify(res.data));
        this.router.navigateByUrl('atb-dir');
      }
    },error=>{
      alert("Credientils Error");
    })
  }
}
