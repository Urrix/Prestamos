import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.css']
})
export class LoanHistoryComponent implements OnInit {
  clientId: string = ''; // Almacena el ID del cliente
  loanRequests: any[] = []; // Lista de solicitudes de préstamo asociadas al cliente

  ngOnInit(): void {
    // Carga el ID del cliente almacenado en localStorage al iniciar el componente
    this.clientId = localStorage.getItem('userId') || '';
    // Carga el historial de préstamos para el cliente
    this.loadLoanHistory();
  }

  loadLoanHistory() {
    // Obtiene el historial de préstamos desde localStorage usando el ID del cliente
    // Convierte los datos de JSON a un arreglo de objetos
    this.loanRequests = JSON.parse(localStorage.getItem(this.clientId) || '[]');
  }

  downloadLoan(loan: any) {
    // Contenido del PDF para la descarga con los datos específicos del préstamo
    const pdfContent = `
      Préstamo para Cliente ID: ${this.clientId}
      Monto: ${loan.loanAmount}
      Interés: ${loan.interestRate}%
      Plazo: ${loan.loanTerm} meses
      Fecha de Solicitud: ${loan.date}
    `;

    // Crea un archivo PDF desde el contenido de texto
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob); // Crea una URL temporal para el archivo PDF
    const a = document.createElement('a'); // Crea un elemento de enlace temporal
    a.href = url; // Establece la URL del archivo
    a.download = `Prestamo_${this.clientId}.pdf`; // Establece el nombre del archivo de descarga
    a.click(); // Activa la descarga al hacer clic en el enlace
    window.URL.revokeObjectURL(url); // Libera la URL temporal después de la descarga
  }
}
