# [Directives](https://angular.dev/guide/directives)
## What are Directive?
Directives are like custom instructions that you can add to HTML elements to modify their behavior or appearance. They act as a bridge between the HTML templates and the underlying logic.
- ### Component Directives:
  These are special directives that define a reusable component with its own template, styles, and logic. They are essentially blueprints for creating custom HTML elements.
- ### Attribute directives:
     Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.
     directives - `NgClass`, `NgStyle` and `NgModel`
     
     _code example_
    ```ts
    // xyz.component.ts
    import {NgClass} from '@angular/common';
    ...
    @Component({
    standalone: true,
    ...
        NgClass, // <-- import into the component
    ...
    ],
    })
    export class AppComponent {
    ...
    }
  ```
  ```html
  <!-- xyz.component.html -->
    <!-- toggle the "special" class on/off with a property -->
    <div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
    ```
- ### Structural directives:
     Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, and manipulating the host elements to which they are attached.
     eg- `NgIf`, `NgFor` and `NgSwitch`

    _code example_
    ```ts
    // xyz.component.ts
    import {NgFor} from '@angular/common';
    ...
    @Component({
    standalone: true,
    ...
        NgFor, // <-- import into the component
    ...
    ],
    })
    export class AppComponent  {
    ...
    }
  ```
  ```html
  <!-- xyz.component.html -->
    <div *ngFor="let item of items">{{ item.name }}</div>
    ```


## code showcase
  - render product card multiple times using `*ngFor`
  - hide/ show ratings using `*ngIf`
  - conditional styling/classes based on ratings.
  - [Control flow](https://angular.dev/guide/templates/control-flow) for same king of use case.
  - demonstrate event binding `(click)="showAlert"`
  - ngModel use case and why it is used as `[(*ngModel)]`
