import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  private showCategory(categoryId: number) {
    console.log('showCategory', categoryId);
    this.router.navigate(['category', categoryId]);
  }

  private showHotOffers() {
    this.router.navigate(['/hot-offers']);
  }

}
