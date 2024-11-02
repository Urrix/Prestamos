import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  clientName: string = '';
  clientEmail: string = '';
  clientPhone: string = '';
  clientAddress: string = '';
  clientId: string = '';


  generateClientId() {
    this.clientId = uuidv4();
  }

  onRegister() {
    this.generateClientId();

    // Guarda los datos del cliente en localStorage
    const clients = JSON.parse(localStorage.getItem('clients') || '[]');
    clients.push({
      clientId: this.clientId,
      clientName: this.clientName,
      clientEmail: this.clientEmail,
      clientPhone: this.clientPhone,
      clientAddress: this.clientAddress
    });
    localStorage.setItem('clients', JSON.stringify(clients));

    // Enviar el correo electrónico de confirmación sin adjuntar PDF
    const subject = 'Confirmación de Registro';
    const text = `Gracias por registrarse. Su ID de cliente es: ${this.clientId} y su correo es: ${this.clientEmail}.`;


  }
}
