import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
import { MailDTO } from '../models/mail.dto.ts.js';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private urlApi: string;
  private controller: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.controller = 'mail';
    this.urlApi = 'http://127.0.0.1:8000/api/' + this.controller;
  }

  sendEmail(mail: MailDTO): Observable<MailDTO> {
    return this.http
      .post<MailDTO>(this.urlApi, mail)
      .pipe(catchError(this.sharedService.handleError));
  }
}
