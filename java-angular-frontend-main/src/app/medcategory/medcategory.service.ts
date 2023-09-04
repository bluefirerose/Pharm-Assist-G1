import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MedCategory } from './medcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = "http://127.0.0.1:8080/api/v1";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MedCategory[]> {
    return this.httpClient.get<MedCategory[]>(this.apiURL + '/medicines/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(category:any): Observable<MedCategory> {
    return this.httpClient.post<MedCategory>(this.apiURL + '/medicines/', JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<MedCategory> {
    return this.httpClient.get<MedCategory>(this.apiURL + '/medicines/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, category:any): Observable<MedCategory> {
    return this.httpClient.put<MedCategory>(this.apiURL + '/medicines/' + id, JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<MedCategory>(this.apiURL + '/medicines/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
