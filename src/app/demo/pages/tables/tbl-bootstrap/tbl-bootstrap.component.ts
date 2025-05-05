import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tbl-bootstrap',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})
export default class TblBootstrapComponent implements OnInit {
  users: never[] = [];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    const token = this.cookieService.get("token")

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    this.http.get<never[]>('http://54.253.220.194:8080/api/locket-clone/user/get-all-user-normal', headers)
      .subscribe(data => {
        this.users = data;
      });
  }
}
