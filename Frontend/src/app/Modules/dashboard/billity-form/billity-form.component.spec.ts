import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillityFormComponent } from './billity-form.component';

describe('BillityFormComponent', () => {
  let component: BillityFormComponent;
  let fixture: ComponentFixture<BillityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillityFormComponent]
    });
    fixture = TestBed.createComponent(BillityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
