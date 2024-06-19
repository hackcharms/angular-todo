import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRODUCT_DATA } from '../../../constants';
import {
  NgClass,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  outputs: ['apply'],
})
export class ProductCardComponent {
  @Input() product = PRODUCT_DATA;
  @Input() label: 'fast-selling' | 'limited-deal' = 'fast-selling';
  @Output() apply = new EventEmitter<{
    id: number;
    category: string;
    title: string;
  }>();

  handleApply() {
    this.apply.emit({
      id: this.product.id,
      category: this.product.category,
      title: this.product.title,
    });
  }
  ratingColor() {
    return {
      good: this.product.rating.rate <= 3,
      excellent: this.product.rating.rate > 3,
    };
  }
}
