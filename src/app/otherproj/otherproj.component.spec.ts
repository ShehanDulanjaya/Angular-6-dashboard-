import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherprojComponent } from './otherproj.component';

describe('OtherprojComponent', () => {
  let component: OtherprojComponent;
  let fixture: ComponentFixture<OtherprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
