import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A43Component } from './a43.component';

describe('A43Component', () => {
  let component: A43Component;
  let fixture: ComponentFixture<A43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
