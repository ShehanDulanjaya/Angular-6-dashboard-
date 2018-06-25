import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedprojectComponent } from './sharedproject.component';

describe('SharedprojectComponent', () => {
  let component: SharedprojectComponent;
  let fixture: ComponentFixture<SharedprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
