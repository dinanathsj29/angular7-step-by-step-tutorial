import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo7StylebindingComponent } from './component-demo7-stylebinding.component';

describe('ComponentDemo7StylebindingComponent', () => {
  let component: ComponentDemo7StylebindingComponent;
  let fixture: ComponentFixture<ComponentDemo7StylebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo7StylebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo7StylebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
