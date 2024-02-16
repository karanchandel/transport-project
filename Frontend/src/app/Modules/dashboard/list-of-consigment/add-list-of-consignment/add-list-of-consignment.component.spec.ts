import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListOfConsignmentComponent } from './add-list-of-consignment.component';

describe('AddListOfConsignmentComponent', () => {
  let component: AddListOfConsignmentComponent;
  let fixture: ComponentFixture<AddListOfConsignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListOfConsignmentComponent]
    });
    fixture = TestBed.createComponent(AddListOfConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
