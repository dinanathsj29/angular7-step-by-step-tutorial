import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo9TemplaterefvarsComponent } from './component-demo9-templaterefvars.component';

describe('ComponentDemo9TemplaterefvarsComponent', () => {
  let component: ComponentDemo9TemplaterefvarsComponent;
  let fixture: ComponentFixture<ComponentDemo9TemplaterefvarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo9TemplaterefvarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo9TemplaterefvarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
