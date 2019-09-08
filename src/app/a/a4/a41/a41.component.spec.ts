import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A41Component } from './a41.component';

describe('A41Component', () => {
  let component: A41Component;
  let fixture: ComponentFixture<A41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
