import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCommunicationComponent } from './c-communication.component';

describe('CCommunicationComponent', () => {
  let component: CCommunicationComponent;
  let fixture: ComponentFixture<CCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CCommunicationComponent]
    });
    fixture = TestBed.createComponent(CCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
