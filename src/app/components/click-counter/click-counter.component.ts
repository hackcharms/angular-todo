import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  standalone: true,
  imports: [],
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.css',
})
export class ClickCounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();
  decrement() {
    if (this.count > 0) this.countChange.emit(this.count - 1);
  }
  increment() {
    console.log('increment', (this.count || 0) + 1);
    this.countChange.emit((this.count || 0) + 1);
  }
}
