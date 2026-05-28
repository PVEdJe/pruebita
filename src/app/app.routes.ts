import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProductsComponent } from './pages/products/products';
import { Addproduct } from './pages/addproduct/addproduct';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  path: 'products',
    component: ProductsComponent
  },
 {
  path: 'products/add',
  component: Addproduct
},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
