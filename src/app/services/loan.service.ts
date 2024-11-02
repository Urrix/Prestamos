import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:3000/api/loans'; // Cambia esto si tu backend usa otro puerto

  constructor(private http: HttpClient) {}

  createLoan(loanData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, loanData);
  }

  getClientLoans(clientId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/client/${clientId}`);
  }
}
