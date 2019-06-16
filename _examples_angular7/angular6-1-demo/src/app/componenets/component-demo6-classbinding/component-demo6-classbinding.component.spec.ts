import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo6ClassbindingComponent } from './component-demo6-classbinding.component';

describe('ComponentDemo6ClassbindingComponent', () => {
  let component: ComponentDemo6ClassbindingComponent;
  let fixture: ComponentFixture<ComponentDemo6ClassbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo6ClassbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo6ClassbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
