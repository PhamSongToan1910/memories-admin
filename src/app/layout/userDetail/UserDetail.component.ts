import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    // Gọi API để load thông tin user theo ID này
  }
}
