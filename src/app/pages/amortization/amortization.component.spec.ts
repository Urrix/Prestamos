import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationComponent } from './amortization.component';

describe('AmortizationComponent', () => {
  let component: AmortizationComponent;
  let fixture: ComponentFixture<AmortizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmortizationComponent]
    });
    fixture = TestBed.createComponent(AmortizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
