# [Routing](https://angular.dev/guide/routing)
Routing helps you change what the user sees in a single-page app.

### Explain Setup
- app.config.ts
- app.routes.ts
- router-outlet in app.component.ts and app.component.html file

### Routing standard
 While there's no official standard set in stone, but There are some routing standards that have been followed by the communities
 - `products/` => index page of product
 - `products/new` => create new product page
 - `products/${id}` => product details page
 - `products/${id}/edit` => update product details
  
### What is a layout
Layout refers to the overall structure and visual organization of your application. It defines the foundational elements that remain consistent across different views or pages.

<img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Flayouts-rfc%2Fpartial-example.png&w=3840&q=75"/>

### Navigation Bar
A way to easily access different sections or functionalities within the application.

[code](https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black)

### Why a proper directory structure
A tidy Directory is key! It makes your code:

- **Easier to understand:** Like a well-organized toolbox, you can find what you need fast.
- **Simpler to change:** Adding features or fixing bugs is a breeze without messy code.
- **More scalable:** As your app grows, it can handle the complexity without crumbling.
- **A joy to collaborate on**: Your teammates will thank you for clear and consistent code.


### Let's Create some Views
`ng g c views/products/index`

`ng g c views/about`

`ng g c views/dummy`

### Create the path
We have created the views, but as of now they are not being used anywhere. Therefore, we can choose whichever path structure we want to follow to show them.
```ts

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: IndexComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'dummy',
        component: DummyComponent,
      },
    ],
  },
];
```

### Make Navbar working
 Since we now have defined paths, let's integrate them into the navbar and see how it works.
 
```ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  ...
  imports: [RouterLinkActive, RouterLink],
  ....
})
export class NavbarComponent {}
```
```html
<!-- src/app/core/navbar/navbar.component.html -->
<nav>
  <ul class="nav-wrapper">
    <li>
      <a routerLinkActive="active" routerLink="/products">Products</a>
    </li>
    <li>
      <a routerLinkActive="active" routerLink="/about">About</a>
    </li>
    <li>
      <a routerLinkActive="active" routerLink="/dummy">Dummy</a>
    </li>
  </ul>
</nav>

```
**RouterLink:** This directive establishes a link to a specific route in your Angular application. It takes the target route path as its argument and handles navigation when the link is clicked.
**RouterLinkActive:** This directive is used to apply CSS classes to an element based on whether the linked route is currently active.

### Pipe
In Angular, pipes are essentially functions that transform data displayed in your templates. They provide a way to format, filter, or modify the data before it's presented to the user. like JsonPipe used in `src/app/views/product/detail/detail.component.html` file


If time permits, we add a details page
