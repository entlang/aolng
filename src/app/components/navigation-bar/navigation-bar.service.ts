import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Categories } from '../../models/categories';

@Injectable()
export class NavigationBarService {
    url = '../../../assets/json/categories.json';

    constructor(private http: Http) { }

    getCategories() {
        return this.http.get(this.url).map(response => response.json().categories);
    }

}
