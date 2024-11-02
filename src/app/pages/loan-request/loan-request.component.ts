import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent {
  clientId: string = '';
  clientName: string = '';
  clientEmail: string = '';
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTerm: number = 0;

  onRequestLoan() {
    const loanRequest = {
      clientId: this.clientId,
      clientName: this.clientName,
      clientEmail: this.clientEmail,
      loanAmount: this.loanAmount,
      interestRate: this.interestRate,
      loanTerm: this.loanTerm,
      date: new Date()
    };

    // Simula el almacenamiento del préstamo en el perfil del cliente
    const clientLoans = JSON.parse(localStorage.getItem(this.clientId) || '[]');
    clientLoans.push(loanRequest);
    localStorage.setItem(this.clientId, JSON.stringify(clientLoans));

    alert('Solicitud de préstamo guardada en el perfil del cliente.');
  }
}
