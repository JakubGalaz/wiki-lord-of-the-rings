import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDescComponent } from './website-desc.component';

describe('WebsiteDescComponent', () => {
  let component: WebsiteDescComponent;
  let fixture: ComponentFixture<WebsiteDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
