import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsToHtmlComponent } from './ts-to-html.component';

describe('TsToHtmlComponent', () => {
  let component: TsToHtmlComponent;
  let fixture: ComponentFixture<TsToHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsToHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
