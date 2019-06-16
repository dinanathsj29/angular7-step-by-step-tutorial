import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo192ServiceemployeedetailsComponent } from './component-demo192-serviceemployeedetails.component';

describe('ComponentDemo192ServiceemployeedetailsComponent', () => {
  let component: ComponentDemo192ServiceemployeedetailsComponent;
  let fixture: ComponentFixture<ComponentDemo192ServiceemployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo192ServiceemployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo192ServiceemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
