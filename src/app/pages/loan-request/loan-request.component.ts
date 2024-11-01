import { Component } from '@angular/core';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent {
  loan = {
    monto: 0,
    plazo: 0,
    interes: 0
  };

  constructor(private loanService: LoanService) {}

  onRequestLoan() {
    this.loanService.requestLoan(this.loan);
  }
}
