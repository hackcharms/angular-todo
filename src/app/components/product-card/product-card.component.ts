import { Component, Input } from '@angular/core';
import { PRODUCT_DATA } from '../../../constants';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({})
  product = PRODUCT_DATA;
}
