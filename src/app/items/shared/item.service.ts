import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../../entities/item.model';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ItemService {

    URL_BASE = 'http://localhost:3000/item-list';
    constructor(private http: HttpClient) { }

    getItemList = () => this.http.get(this.URL_BASE);

    getItem(id: number): Observable<Item> {
        const url = `${this.URL_BASE}` + '/' + `${id}`;
        return this.http.get<Item>(url);
    }

    updateItem(item: Item): Observable<Item> {
        const url = `${this.URL_BASE}` + '/' + `${item.id}`;
        return this.http.put<Item>(url, item, httpOptions);
    }

    deleteItem(id: number): Observable<Item> {
        const url = `${this.URL_BASE}` + '/' + `${id}`;
        return this.http.delete<Item>(url);
    }

    postItem = (item: Item) => this.http.post(this.URL_BASE, item, httpOptions);

}

