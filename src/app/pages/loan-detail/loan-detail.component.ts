import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Payment {
  mes: number;
  pagoMensual: number;
  interes: number;
  capital: number;
  saldoRestante: number;
}

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  amortizationTable: Payment[] = [
    { mes: 1, pagoMensual: 1000, interes: 200, capital: 800, saldoRestante: 9200 },
    { mes: 2, pagoMensual: 1000, interes: 180, capital: 820, saldoRestante: 8380 },
    // Añadir otros pagos simulados o cargar dinámicamente
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const loanId = this.route.snapshot.paramMap.get('id');
    // Obtener la tabla de amortización por `loanId`
  }
}
