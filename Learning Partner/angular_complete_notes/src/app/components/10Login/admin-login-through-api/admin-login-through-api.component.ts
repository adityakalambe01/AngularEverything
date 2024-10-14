import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../../../constant/Constants';

@Component({
  selector: 'app-admin-login-through-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login-through-api.component.html',
  styleUrl: './admin-login-through-api.component.css',
  providers: [Constants],
})
export class AdminLoginThroughApiComponent {
  http = inject(HttpClient);
  router = inject(Router);
  constt = inject(Constants);

  userObject: any = {
    EmailId: 'adityakalambe20@gmail.com',
    Password: 'adityakalambe20@gmail.com',
  };

  onLogin(): void {
    this.http
      .post(this.constt.USER_API, this.userObject)
      .subscribe(
        (res: any) => {
          localStorage.setItem('loginUser', JSON.stringify(res.data));
          this.router.navigateByUrl('atb-dir');
        },
        (error) => {
          alert('Credientils Error');
        }
      );
  }
}
