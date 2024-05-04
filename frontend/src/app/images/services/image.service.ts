import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { ImageClass } from '../models/image';

interface deleteResponse {
  affected: number;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'image';
    this.urlApi = 'http://127.0.0.1:8000/api/' + this.controller;
  }

  getImages(): Observable<ImageClass[]> {
    return this.http
      .get<ImageClass[]>(this.urlApi)
      .pipe(catchError(this.sharedService.handleError));
  }

  getImageById(imageId: string): Observable<ImageClass> {
    return this.http
      .get<ImageClass>(this.urlApi + imageId)
      .pipe(catchError(this.sharedService.handleError));
  }

  getImagesByProduct(productId: string): Observable<ImageClass[]> {
    return this.http
      .get<ImageClass[]>(this.urlApi + '/product/' + productId)
      .pipe(catchError(this.sharedService.handleError));
  }

  getImagesByTreatment(treatmentId: string): Observable<ImageClass[]> {
    return this.http
      .get<ImageClass[]>(this.urlApi + '/treatment/' + treatmentId)
      .pipe(catchError(this.sharedService.handleError));
  }

  getImageByCategory(categoryId: string): Observable<ImageClass> {
    return this.http
      .get<ImageClass>(this.urlApi + '/category/' + categoryId)
      .pipe(catchError(this.sharedService.handleError));
  }

  createImage(image: ImageClass): Observable<ImageClass> {
    return this.http
      .post<ImageClass>(this.urlApi, image)
      .pipe(catchError(this.sharedService.handleError));
  }

  updateImage(imageId: string, image: ImageClass): Observable<ImageClass> {
    return this.http
      .put<ImageClass>(this.urlApi + imageId, image)
      .pipe(catchError(this.sharedService.handleError));
  }

  deleteImage(imageId: string): Observable<deleteResponse> {
    return this.http
      .delete<deleteResponse>(this.urlApi + imageId)
      .pipe(catchError(this.sharedService.handleError));
  }
}
