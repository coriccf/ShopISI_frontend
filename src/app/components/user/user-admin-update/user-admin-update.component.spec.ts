import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminUpdateComponent } from './user-admin-update.component';

describe('UserAdminUpdateComponent', () => {
  let component: UserAdminUpdateComponent;
  let fixture: ComponentFixture<UserAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
