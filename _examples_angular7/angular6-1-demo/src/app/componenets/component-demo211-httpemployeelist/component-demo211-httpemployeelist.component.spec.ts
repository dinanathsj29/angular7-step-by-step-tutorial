import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo211HttpemployeelistComponent } from './component-demo211-httpemployeelist.component';

describe('ComponentDemo211HttpemployeelistComponent', () => {
  let component: ComponentDemo211HttpemployeelistComponent;
  let fixture: ComponentFixture<ComponentDemo211HttpemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo211HttpemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo211HttpemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
