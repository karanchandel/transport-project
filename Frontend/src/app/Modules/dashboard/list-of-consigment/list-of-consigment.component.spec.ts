import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfConsigmentComponent } from './list-of-consigment.component';

describe('ListOfConsigmentComponent', () => {
  let component: ListOfConsigmentComponent;
  let fixture: ComponentFixture<ListOfConsigmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfConsigmentComponent]
    });
    fixture = TestBed.createComponent(ListOfConsigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
