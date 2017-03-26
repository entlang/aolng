import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    url = '../../../assets/json/categories.json';
    private categories: Category[];

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.url).map(response => {
            this.categories = response.json().categories;
            return this.categories;
        });
    }

    getCategoryById(id: number): Observable<Category> {
        if (this.categories) {
            return this.findCategoriesById(id);
        } else {
            this.http.get(this.url).map(response => {
                this.categories = response.json().categories;
                return this.findCategoriesById(id);
            });
        }
    }

    // getCategoryById(id: number): Observable<Category> {
    //     return this.http.get(this.url).map(response => {
    //         const res = response.json().categories as Category[];
    //         const filtered = res.filter(category => category.catIndex === id)[0];
    //         return filtered;
    //     });
    // }

    // helper methods
    private findCategoriesById(id: number): Observable<Category> {
        const filteredCategories = Observable.of(this.categories.filter(category => category.catIndex === id)[0]);
        if (filteredCategories) {
            return filteredCategories;
        }
    }

}
