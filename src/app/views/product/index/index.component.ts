import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  title = 'Products';
  applyForProduct(productDetails: {
    category: string;
    title: string;
    id: number;
  }) {
    console.log('applyForProduct', productDetails);
    alert(JSON.stringify(productDetails));
    console.log(this.route, this.router);
    this.router.navigate(['/products/' + productDetails.id]);
  }
}
