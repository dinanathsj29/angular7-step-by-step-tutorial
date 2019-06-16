import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo212HttpemployeeDetailsComponent } from './component-demo212-httpemployee-details.component';

describe('ComponentDemo212HttpemployeeDetailsComponent', () => {
  let component: ComponentDemo212HttpemployeeDetailsComponent;
  let fixture: ComponentFixture<ComponentDemo212HttpemployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo212HttpemployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo212HttpemployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
