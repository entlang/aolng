import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private category: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.categoryService.getCategoryById(+params['id']))
      .subscribe((category: Category) => {
        this.category = category;
      });
  }

}
