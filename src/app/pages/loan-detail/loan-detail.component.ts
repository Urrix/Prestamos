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
  // Definición de una tabla de amortización con datos simulados
  amortizationTable: Payment[] = [
    { mes: 1, pagoMensual: 1000, interes: 200, capital: 800, saldoRestante: 9200 },
    { mes: 2, pagoMensual: 1000, interes: 180, capital: 820, saldoRestante: 8380 },
    // Añadir otros pagos simulados o cargar dinámicamente
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene el ID del préstamo desde los parámetros de la ruta
    const loanId = this.route.snapshot.paramMap.get('id');
    // Comentario: Aquí se puede agregar la lógica para obtener la tabla de amortización usando el `loanId`
  }
}
