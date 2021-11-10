import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbadorVirtualComponent } from './probador-virtual.component';

describe('ProbadorVirtualComponent', () => {
  let component: ProbadorVirtualComponent;
  let fixture: ComponentFixture<ProbadorVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbadorVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbadorVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
