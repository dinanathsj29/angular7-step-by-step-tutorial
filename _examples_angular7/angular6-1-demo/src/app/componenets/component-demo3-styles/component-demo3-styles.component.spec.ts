import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo3StylesComponent } from './component-demo3-styles.component';

describe('ComponentDemo3StylesComponent', () => {
  let component: ComponentDemo3StylesComponent;
  let fixture: ComponentFixture<ComponentDemo3StylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo3StylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo3StylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
