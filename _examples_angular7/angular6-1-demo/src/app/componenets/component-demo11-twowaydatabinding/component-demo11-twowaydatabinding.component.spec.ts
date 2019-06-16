import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo11TwowaydatabindingComponent } from './component-demo11-twowaydatabinding.component';

describe('ComponentDemo11TwowaydatabindingComponent', () => {
  let component: ComponentDemo11TwowaydatabindingComponent;
  let fixture: ComponentFixture<ComponentDemo11TwowaydatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo11TwowaydatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo11TwowaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
