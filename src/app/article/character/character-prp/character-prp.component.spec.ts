import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPrpComponent } from './character-prp.component';

describe('CharacterPrpComponent', () => {
  let component: CharacterPrpComponent;
  let fixture: ComponentFixture<CharacterPrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
