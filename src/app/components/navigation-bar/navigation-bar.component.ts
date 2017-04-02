import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Input() categories: Category[];

  constructor(private router: Router) { }

  private showCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
  }

  private showHotOffers() {
    this.router.navigate(['/hot-offers']);
  }

}
