import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Decorador @Injectable indica que esta clase se puede inyectar como un servicio en la aplicación
@Injectable({
  providedIn: 'root' // Proporciona este servicio en el nivel raíz de la aplicación
})
export class LoanService {
  // URL base para las solicitudes al backend (cambiar puerto si es necesario)
  private apiUrl = 'http://localhost:3000/api/loans';

  // Inyecta HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) {}

  /**
   * Crea un nuevo préstamo en el servidor.
   * @param loanData - Objeto con los datos del préstamo que se enviarán al backend.
   * @returns Observable<any> - Retorna un Observable que emite la respuesta del servidor.
   */
  createLoan(loanData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, loanData);
  }

  /**
   * Obtiene los préstamos de un cliente específico.
   * @param clientId - ID del cliente para identificar sus préstamos.
   * @returns Observable<any> - Retorna un Observable con la lista de préstamos del cliente.
   */
  getClientLoans(clientId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/client/${clientId}`);
  }
}
