import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent {}
