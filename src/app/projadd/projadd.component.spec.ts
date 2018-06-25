import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjaddComponent } from './projadd.component';

describe('ProjaddComponent', () => {
  let component: ProjaddComponent;
  let fixture: ComponentFixture<ProjaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
