import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo12NgifComponent } from './component-demo12-ngif.component';

describe('ComponentDemo12NgifComponent', () => {
  let component: ComponentDemo12NgifComponent;
  let fixture: ComponentFixture<ComponentDemo12NgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo12NgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo12NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
