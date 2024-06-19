import { JsonPipe } from '@angular/common';
import { PRODUCT_DETAILS } from './../../../../constants/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  stateId: string | null = null;
  productDetails = PRODUCT_DETAILS;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.stateId = this.route.snapshot.paramMap.get('id');
  }
}
