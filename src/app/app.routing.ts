import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { HotOffersComponent } from './pages/hot-offers/hot-offers.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hot-offers', component: HotOffersComponent },
  { path: 'category/:id', component: CategoryComponent }
];
