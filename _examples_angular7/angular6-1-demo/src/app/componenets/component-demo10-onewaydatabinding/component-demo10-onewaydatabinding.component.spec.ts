import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo10OnewaydatabindingComponent } from './component-demo10-onewaydatabinding.component';

describe('ComponentDemo10OnewaydatabindingComponent', () => {
  let component: ComponentDemo10OnewaydatabindingComponent;
  let fixture: ComponentFixture<ComponentDemo10OnewaydatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo10OnewaydatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo10OnewaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
