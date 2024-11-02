import { Component } from '@angular/core';

// Definición del componente LoanRequestComponent, que maneja la lógica de la solicitud de préstamo
@Component({
  selector: 'app-loan-request', // Nombre del selector para usar este componente en HTML
  templateUrl: './loan-request.component.html', // Ruta del archivo de plantilla HTML asociado al componente
  styleUrls: ['./loan-request.component.css'] // Ruta del archivo de estilos CSS asociado al componente
})
export class LoanRequestComponent {
  // Declaración de propiedades para almacenar datos de entrada de la solicitud de préstamo
  clientId: string = '';         // ID del cliente que solicita el préstamo
  clientName: string = '';       // Nombre del cliente
  clientEmail: string = '';      // Correo electrónico del cliente
  loanAmount: number = 0;        // Monto solicitado para el préstamo
  interestRate: number = 0;      // Tasa de interés aplicada al préstamo
  loanTerm: number = 0;          // Plazo del préstamo en meses

  // Método que se ejecuta al enviar la solicitud de préstamo
  onRequestLoan() {
    // Crea un objeto loanRequest con los datos de la solicitud de préstamo
    const loanRequest = {
      clientId: this.clientId,
      clientName: this.clientName,
      clientEmail: this.clientEmail,
      loanAmount: this.loanAmount,
      interestRate: this.interestRate,
      loanTerm: this.loanTerm,
      date: new Date() // Fecha actual de la solicitud de préstamo
    };

    // Recupera cualquier solicitud de préstamo previa del cliente desde localStorage
    const clientLoans = JSON.parse(localStorage.getItem(this.clientId) || '[]');
    // Añade la nueva solicitud de préstamo al array de préstamos del cliente
    clientLoans.push(loanRequest);
    // Almacena el array actualizado en localStorage usando el clientId como clave
    localStorage.setItem(this.clientId, JSON.stringify(clientLoans));

    // Muestra una alerta indicando que la solicitud de préstamo se ha guardado correctamente
    alert('Solicitud de préstamo guardada en el perfil del cliente.');
  }
}
