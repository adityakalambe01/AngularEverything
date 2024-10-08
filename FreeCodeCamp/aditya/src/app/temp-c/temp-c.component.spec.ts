import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCComponent } from './temp-c.component';

describe('TempCComponent', () => {
  let component: TempCComponent;
  let fixture: ComponentFixture<TempCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempCComponent]
    });
    fixture = TestBed.createComponent(TempCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
