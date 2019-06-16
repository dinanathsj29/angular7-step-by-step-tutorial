import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo5PropertybindingComponent } from './component-demo5-propertybinding.component';

describe('ComponentDemo5PropertybindingComponent', () => {
  let component: ComponentDemo5PropertybindingComponent;
  let fixture: ComponentFixture<ComponentDemo5PropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo5PropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo5PropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
