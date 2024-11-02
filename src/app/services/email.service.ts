import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // URL del backend

  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, text: string, pdfBase64: string): Observable<any> {
    const payload = { to, subject, text, pdfBase64 };
    return this.http.post<any>(this.apiUrl, payload);
  }
}
