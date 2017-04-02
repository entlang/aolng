import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Category } from '../../models/category';

@Component({
  selector: 'app-subcategory-card',
  templateUrl: './subcategory-card.component.html',
  styleUrls: ['./subcategory-card.component.scss']
})
export class SubcategoryCardComponent implements OnInit {
  @Input() category: Category;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) => this.subcategoryService.getCategoryById(+params['id']))
    //   .subscribe((category: Category) => {
    //     this.category = category;
    //   });
  }

}
