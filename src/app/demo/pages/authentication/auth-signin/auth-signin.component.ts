import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent {
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(): void {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.http.post<never>('http://54.253.220.194:8080/api/locket-clone/auth/login', payload)
      .subscribe({
        next: (response) => {
          // Giả sử token trả về trong response.token
          // this.cookieService.set('token', response.data.access_token); // Hoặc dùng localStorage.setItem
          console.log(response);
          this.router.navigate(['/']); // hoặc trang chính sau đăng nhập
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Login failed. Please check your credentials.');
        }
      });
  }
}
