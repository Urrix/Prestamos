import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanHistoryComponent } from './loan-history.component';

describe('LoanHistoryComponent', () => {
  let component: LoanHistoryComponent;
  let fixture: ComponentFixture<LoanHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanHistoryComponent]
    });
    fixture = TestBed.createComponent(LoanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});