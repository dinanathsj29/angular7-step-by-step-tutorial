import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo191ServiceemployeelistComponent } from './component-demo191-serviceemployeelist.component';

describe('ComponentDemo191ServiceemployeelistComponent', () => {
  let component: ComponentDemo191ServiceemployeelistComponent;
  let fixture: ComponentFixture<ComponentDemo191ServiceemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo191ServiceemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo191ServiceemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
