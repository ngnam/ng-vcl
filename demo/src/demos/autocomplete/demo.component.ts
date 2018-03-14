import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

@Component({
  templateUrl: 'demo.component.html'
})
export class AutocompleteDemoComponent {
  constructor(private http: Http) { }

  onChange(change) {
    console.log(change);
  }

  booksSearch$ = new BehaviorSubject<string>('');
  books$ = this.booksSearch$
               .debounceTime(200)
               .switchMap(search => {
                 if (!search || search.length < 2) return  Observable.of([]);
                 return this.http.get(`${BOOK_API_URL}?q=${search}&projection=lite`)
                  .map(result => result.json())
                  .map(data => {
                      if (!data.items) return [];
                      return data.items.map(item => ({
                        id: item.id,
                        title: item.volumeInfo && item.volumeInfo.title
                      }));
                  });
               });
}


