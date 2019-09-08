import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A53Component } from './a53.component';

describe('A53Component', () => {
  let component: A53Component;
  let fixture: ComponentFixture<A53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
