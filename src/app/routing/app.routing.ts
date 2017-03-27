import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CategoryComponent } from '../pages/category/category.component';
import { SubcategoryComponent } from '../pages/subcategory/subcategory.component';
import { HotOffersComponent } from '../pages/hot-offers/hot-offers.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hot-offers',
    component: HotOffersComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: 'account',
    loadChildren: 'app/modules/user-account/user-account.module#UserAccountModule',
    data: { preload: true }
  },
  {
    path: 'about',
    loadChildren: 'app/modules/about/about.module#AboutModule',
    data: { preload: false }
  }
];
