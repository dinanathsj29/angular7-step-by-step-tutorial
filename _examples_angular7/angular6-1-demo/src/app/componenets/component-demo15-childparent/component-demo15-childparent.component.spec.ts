import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo15ChildparentComponent } from './component-demo15-childparent.component';

describe('ComponentDemo15ChildparentComponent', () => {
  let component: ComponentDemo15ChildparentComponent;
  let fixture: ComponentFixture<ComponentDemo15ChildparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo15ChildparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo15ChildparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
