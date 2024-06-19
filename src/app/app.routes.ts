import { DummyComponent } from './components/dummy/dummy.component';
import { AboutComponent } from './views/about/about.component';
import { Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { IndexComponent } from './views/product/index/index.component';
import { DetailComponent } from './views/product/detail/detail.component';

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
        path: 'products/:id',
        component: DetailComponent,
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
