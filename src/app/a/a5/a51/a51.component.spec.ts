import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A51Component } from './a51.component';

describe('A51Component', () => {
  let component: A51Component;
  let fixture: ComponentFixture<A51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
