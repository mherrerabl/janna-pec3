import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { deleteResponse } from '../../shared/models/deleteResponse.dto';
import { SharedService } from '../../shared/services/shared.service';
import { ProductClass } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'product';
    this.urlApi = environment.API_URL + '/api/' + this.controller;
  }

  getProducts(): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi)
      .pipe(catchError(this.sharedService.handleError));
  }

  getProductsForSale(): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi + '/forsale')
      .pipe(catchError(this.sharedService.handleError));
  }

  getProductsByOffer(): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi + '/offer')
      .pipe(catchError(this.sharedService.handleError));
  }
  getProductsByTrend(): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi + '/trend')
      .pipe(catchError(this.sharedService.handleError));
  }
  getProductsByCategory(categoryUrl: string): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi + '/category/' + categoryUrl)
      .pipe(catchError(this.sharedService.handleError));
  }

  getNewProducts(quantity: number): Observable<ProductClass[]> {
    return this.http
      .get<ProductClass[]>(this.urlApi + '/new/' + quantity)
      .pipe(catchError(this.sharedService.handleError));
  }

  getProductById(productId: string): Observable<ProductClass> {
    return this.http
      .get<ProductClass>(this.urlApi + '/' + productId)
      .pipe(catchError(this.sharedService.handleError));
  }

  getProductByIdForSale(productId: string): Observable<ProductClass> {
    return this.http
      .get<ProductClass>(this.urlApi + '/forsale/' + productId)
      .pipe(catchError(this.sharedService.handleError));
  }

  createProduct(product: ProductClass): Observable<ProductClass> {
    return this.http
      .post<ProductClass>(this.urlApi, product)
      .pipe(catchError(this.sharedService.handleError));
  }

  updateProduct(
    productId: string,
    product: ProductClass
  ): Observable<ProductClass> {
    return this.http
      .put<ProductClass>(this.urlApi + productId, product)
      .pipe(catchError(this.sharedService.handleError));
  }

  deleteProduct(productId: string): Observable<deleteResponse> {
    return this.http
      .delete<deleteResponse>(this.urlApi + productId)
      .pipe(catchError(this.sharedService.handleError));
  }
}
