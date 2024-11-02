import { Component } from '@angular/core';

interface Payment {
  mes: number;
  pagoMensual: number;
  interes: number;
  capital: number;
  saldoRestante: number;
}

@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent {
  loanAmount: number = 0;          // Monto del préstamo
  interestRate: number = 0;        // Tasa de interés
  loanTerm: number = 0;            // Plazo en meses
  amortizationTable: Payment[] = []; // Tabla de amortización

  // Función para calcular la tabla de amortización
  calculateAmortization() {
    this.amortizationTable = []; // Reinicia la tabla

    // Aquí se añade la lógica para calcular la tabla de amortización
    for (let mes = 1; mes <= this.loanTerm; mes++) {
      const pagoMensual = (this.loanAmount * this.interestRate) / (1 - Math.pow(1 + this.interestRate, -this.loanTerm));
      const interes = this.loanAmount * this.interestRate;
      const capital = pagoMensual - interes;
      const saldoRestante = this.loanAmount - capital;

      this.amortizationTable.push({
        mes,
        pagoMensual,
        interes,
        capital,
        saldoRestante
      });
    }
  }
}
