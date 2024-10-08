import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtbDirComponent } from './atb-dir.component';

describe('AtbDirComponent', () => {
  let component: AtbDirComponent;
  let fixture: ComponentFixture<AtbDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtbDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtbDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
