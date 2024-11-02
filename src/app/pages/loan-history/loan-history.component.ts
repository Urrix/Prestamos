import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.css']
})
export class LoanHistoryComponent implements OnInit {
  clientId: string = '';
  loanRequests: any[] = [];

  ngOnInit(): void {
    this.clientId = localStorage.getItem('userId') || '';
    this.loadLoanHistory();
  }

  loadLoanHistory() {
    this.loanRequests = JSON.parse(localStorage.getItem(this.clientId) || '[]');
  }

  downloadLoan(loan: any) {
    const pdfContent = `
      Préstamo para Cliente ID: ${this.clientId}
      Monto: ${loan.loanAmount}
      Interés: ${loan.interestRate}%
      Plazo: ${loan.loanTerm} meses
      Fecha de Solicitud: ${loan.date}
    `;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Prestamo_${this.clientId}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
