import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProductsComponent } from './pages/products/products';
import { Addproduct } from './pages/addproduct/addproduct';
import { Users } from './pages/users/users';
import { Addusers } from './pages/addusers/addusers';

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
path: 'users',
component: Users
},
{
  path: 'users/add',
  component: Addusers

},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
