import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { CategoryClass } from '../models/category';

interface deleteResponse {
  affected: number;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'category';
    this.urlApi = 'http://127.0.0.1:8000/api/' + this.controller;
  }

  getCategories(): Observable<CategoryClass[]> {
    return this.http
      .get<CategoryClass[]>(this.urlApi)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoryById(categoryId: string): Observable<CategoryClass> {
    return this.http
      .get<CategoryClass>(this.urlApi + categoryId)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoriesByDepartment(department: string): Observable<CategoryClass[]> {
    return this.http
      .get<CategoryClass[]>(this.urlApi + '/department/' + department)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoriesByParam(paramUrl: string): Observable<CategoryClass[]> {
    return this.http
      .get<CategoryClass[]>(this.urlApi + '/categories/' + paramUrl)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoryByUrl(paramUrl: string): Observable<CategoryClass> {
    return this.http
      .get<CategoryClass>(this.urlApi + '/category/' + paramUrl)
      .pipe(catchError(this.sharedService.handleError));
  }
  createCategory(category: CategoryClass): Observable<CategoryClass> {
    return this.http
      .post<CategoryClass>(this.urlApi, category)
      .pipe(catchError(this.sharedService.handleError));
  }

  updateCategory(
    categoryId: string,
    category: CategoryClass
  ): Observable<CategoryClass> {
    return this.http
      .put<CategoryClass>(this.urlApi + categoryId, category)
      .pipe(catchError(this.sharedService.handleError));
  }

  deleteCategory(categoryId: string): Observable<deleteResponse> {
    return this.http
      .delete<deleteResponse>(this.urlApi + categoryId)
      .pipe(catchError(this.sharedService.handleError));
  }
}
