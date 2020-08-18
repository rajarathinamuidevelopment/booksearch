import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class BooksService {

    constructor(private http: HttpClient) { }

    getBookssLarge() {
        return this.http.get<any>('assets/books-large.json')
        .toPromise()
        .then(res => <Book[]>res.data)
        .then(data => { return data; });
    }
}