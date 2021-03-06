import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routing/app.routing';
import { CustomPreloadingStrategy } from './routing/custom.preloading.strategy';
import { AuthGuard } from './routing/auth.guard';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { HomeComponent } from './pages/home/home.component';
import { HotOffersComponent } from './pages/hot-offers/hot-offers.component';
import { SubcategoryCardComponent } from './components/subcategory-card/subcategory-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CategoryComponent,
    SubcategoryComponent,
    HomeComponent,
    HotOffersComponent,
    SubcategoryCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingStrategy })
  ],
  providers: [CustomPreloadingStrategy, AuthGuard, AuthService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
