import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../../models/categories';
import { NavigationBarService } from './navigation-bar.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  categories: Categories;

  constructor(private navigationBarService: NavigationBarService) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.navigationBarService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

}
