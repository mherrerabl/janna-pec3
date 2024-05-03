import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { CategoryDTO } from '../models/category.dto';

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

  getCategories(): Observable<CategoryDTO[]> {
    return this.http
      .get<CategoryDTO[]>(this.urlApi)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoriesByDepartment(department: string): Observable<CategoryDTO[]> {
    return this.http
      .get<CategoryDTO[]>(this.urlApi + '/categories/' + department)
      .pipe(catchError(this.sharedService.handleError));
  }

  getCategoriesBySubcategory(categoryId: string): Observable<CategoryDTO[]> {
    return this.http
      .get<CategoryDTO[]>(this.urlApi + '/subcategory/' + categoryId)
      .pipe(catchError(this.sharedService.handleError));
  }
}
