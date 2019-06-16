import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo8EventbindingComponent } from './component-demo8-eventbinding.component';

describe('ComponentDemo8EventbindingComponent', () => {
  let component: ComponentDemo8EventbindingComponent;
  let fixture: ComponentFixture<ComponentDemo8EventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo8EventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo8EventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
