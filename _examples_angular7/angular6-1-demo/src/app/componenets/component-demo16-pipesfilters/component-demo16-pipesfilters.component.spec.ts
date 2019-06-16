import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo16PipesfiltersComponent } from './component-demo16-pipesfilters.component';

describe('ComponentDemo16PipesfiltersComponent', () => {
  let component: ComponentDemo16PipesfiltersComponent;
  let fixture: ComponentFixture<ComponentDemo16PipesfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemo16PipesfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemo16PipesfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
