import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';

import { appRoutes } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { HotOffersComponent } from './pages/hot-offers/hot-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CategoryComponent,
    SubcategoryComponent,
    HomeComponent,
    HotOffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
