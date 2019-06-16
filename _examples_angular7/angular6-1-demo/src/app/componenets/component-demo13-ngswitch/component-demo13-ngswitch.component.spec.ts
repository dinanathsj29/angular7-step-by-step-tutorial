import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo13NgswitchComponent } from './component-demo13-ngswitch.component';

describe('ComponentDemo13NgswitchComponent', () => {
  let component: ComponentDemo13NgswitchComponent;
  let fixture: ComponentFixture<ComponentDemo13NgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo13NgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo13NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
