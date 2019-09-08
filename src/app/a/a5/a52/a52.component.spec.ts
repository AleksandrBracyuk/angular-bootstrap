import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A52Component } from './a52.component';

describe('A52Component', () => {
  let component: A52Component;
  let fixture: ComponentFixture<A52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
