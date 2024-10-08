import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToTsComponent } from './html-to-ts.component';

describe('HtmlToTsComponent', () => {
  let component: HtmlToTsComponent;
  let fixture: ComponentFixture<HtmlToTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlToTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
