import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemtaskComponent } from './viewmemtask.component';

describe('ViewmemtaskComponent', () => {
  let component: ViewmemtaskComponent;
  let fixture: ComponentFixture<ViewmemtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmemtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmemtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
