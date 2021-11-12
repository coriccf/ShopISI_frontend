import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessOrderComponent } from './less-order.component';

describe('LessOrderComponent', () => {
  let component: LessOrderComponent;
  let fixture: ComponentFixture<LessOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
