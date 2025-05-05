import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tbl-bootstrap',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})
export default class TblBootstrapComponent implements OnInit {
  users: never[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<never[]>('http')
      .subscribe(data => {
        this.users = data;
      });
  }
}
