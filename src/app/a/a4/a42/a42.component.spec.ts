import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A42Component } from './a42.component';

describe('A42Component', () => {
  let component: A42Component;
  let fixture: ComponentFixture<A42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
