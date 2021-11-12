import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBougthComponent } from './most-bougth.component';

describe('MostBougthComponent', () => {
  let component: MostBougthComponent;
  let fixture: ComponentFixture<MostBougthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostBougthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostBougthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
