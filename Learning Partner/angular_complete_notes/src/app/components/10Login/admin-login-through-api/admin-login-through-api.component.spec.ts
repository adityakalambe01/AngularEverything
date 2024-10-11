import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginThroughApiComponent } from './admin-login-through-api.component';

describe('AdminLoginThroughApiComponent', () => {
  let component: AdminLoginThroughApiComponent;
  let fixture: ComponentFixture<AdminLoginThroughApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLoginThroughApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginThroughApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
