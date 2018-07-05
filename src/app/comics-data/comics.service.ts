import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Comic } from './comic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private url = 'api/comics';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Comic[]> {
    return this.http
      .get<Comic[]>(this.url)
      .pipe(
        tap(comics => this.log(`fetched comics: ${comics.length}`)),
        catchError(this.handleError('getComics', []))
      );
  }

  getById(id: number): Observable<Comic> {
    const url = `${this.url}/${id}`;
    return this.http
      .get<Comic>(url)
      .pipe(
        tap(_ => this.log(`getComic id=${id}`)),
        catchError(this.handleError<Comic>(`getComic id=${id}`))
      );
  }

  search(term: string): Observable<Comic[]> {
    if (!term.trim()) { return of([]); }

    const t = '';
    const url = `${this.url}/?${t}`;

    return this.http
      .get<Comic[]>(url)
      .pipe(
        tap(_ => this.log('found comics matching ${term}')),
        catchError(this.handleError<Comic[]>(`search comics with term: ${term}`, []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}: ` + error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
