import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo14NgforComponent } from './component-demo14-ngfor.component';

describe('ComponentDemo14NgforComponent', () => {
  let component: ComponentDemo14NgforComponent;
  let fixture: ComponentFixture<ComponentDemo14NgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo14NgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo14NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
