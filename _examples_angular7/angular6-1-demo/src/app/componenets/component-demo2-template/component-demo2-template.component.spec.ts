import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo2TemplateComponent } from './component-demo2-template.component';

describe('ComponentDemo2TemplateComponent', () => {
  let component: ComponentDemo2TemplateComponent;
  let fixture: ComponentFixture<ComponentDemo2TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo2TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo2TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
