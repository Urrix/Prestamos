import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  requestLoan(loanData: any) {
    console.log('Solicitud de préstamo:', loanData);
    // Aquí iría la lógica para guardar el préstamo y generar la tabla de amortización
  }
}
