import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo4InterpolationComponent } from './component-demo4-interpolation.component';

describe('ComponentDemo4InterpolationComponent', () => {
  let component: ComponentDemo4InterpolationComponent;
  let fixture: ComponentFixture<ComponentDemo4InterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo4InterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo4InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
