import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo1Component } from './component-demo1.component';

describe('ComponentDemo1Component', () => {
  let component: ComponentDemo1Component;
  let fixture: ComponentFixture<ComponentDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
