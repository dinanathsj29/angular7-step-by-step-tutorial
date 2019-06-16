import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import forms module for two way data binding
import { FormsModule } from '@angular/forms';

// 21 1a. import HttpClientModule
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './componenets/component-demo1/component-demo1.component';
import { ComponentDemo2TemplateComponent } from './componenets/component-demo2-template/component-demo2-template.component';
import { ComponentDemo3StylesComponent } from './componenets/component-demo3-styles/component-demo3-styles.component';
import { ComponentDemo4InterpolationComponent } from './componenets/component-demo4-interpolation/component-demo4-interpolation.component';
import { ComponentDemo5PropertybindingComponent } from './componenets/component-demo5-propertybinding/component-demo5-propertybinding.component';
import { ComponentDemo6ClassbindingComponent } from './componenets/component-demo6-classbinding/component-demo6-classbinding.component';
import { ComponentDemo7StylebindingComponent } from './componenets/component-demo7-stylebinding/component-demo7-stylebinding.component';
import { ComponentDemo8EventbindingComponent } from './componenets/component-demo8-eventbinding/component-demo8-eventbinding.component';
import { ComponentDemo9TemplaterefvarsComponent } from './componenets/component-demo9-templaterefvars/component-demo9-templaterefvars.component';
import { ComponentDemo10OnewaydatabindingComponent } from './componenets/component-demo10-onewaydatabinding/component-demo10-onewaydatabinding.component';
import { ComponentDemo11TwowaydatabindingComponent } from './componenets/component-demo11-twowaydatabinding/component-demo11-twowaydatabinding.component';
import { ComponentDemo12NgifComponent } from './componenets/component-demo12-ngif/component-demo12-ngif.component';
import { ComponentDemo13NgswitchComponent } from './componenets/component-demo13-ngswitch/component-demo13-ngswitch.component';
import { ComponentDemo14NgforComponent } from './componenets/component-demo14-ngfor/component-demo14-ngfor.component';
import { ComponentDemo15ChildparentComponent } from './componenets/component-demo15-childparent/component-demo15-childparent.component';
import { ComponentDemo16PipesfiltersComponent } from './componenets/component-demo16-pipesfilters/component-demo16-pipesfilters.component';
import { ComponentDemo191ServiceemployeelistComponent } from './componenets/component-demo191-serviceemployeelist/component-demo191-serviceemployeelist.component';
import { ComponentDemo192ServiceemployeedetailsComponent } from './componenets/component-demo192-serviceemployeedetails/component-demo192-serviceemployeedetails.component';

// 19 2.1. import custom created service to Register with Injector
import { EmployeeService } from './services/employee.service';

import { ComponentDemo211HttpemployeelistComponent } from './componenets/component-demo211-httpemployeelist/component-demo211-httpemployeelist.component';
import { ComponentDemo212HttpemployeeDetailsComponent } from './componenets/component-demo212-httpemployee-details/component-demo212-httpemployee-details.component';

// 21 1c. import custom created service Register with Injector
import { EmployeehttpService } from './services/employeehttp.service';

// 22. directives - import custom created directives
import { BlueHighlightDirective } from './directives/blue-highlight.directive';

// 23. directives - import custom created directives
import { HighlightCilckDirective } from './directives/highlight-cilck.directive';

// 24. pipes - import custom created pipes
import { SquareRootPipe } from './pipes/squareRootPipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
    ComponentDemo2TemplateComponent,
    ComponentDemo3StylesComponent,
    ComponentDemo4InterpolationComponent,
    ComponentDemo5PropertybindingComponent,
    ComponentDemo6ClassbindingComponent,
    ComponentDemo7StylebindingComponent,
    ComponentDemo8EventbindingComponent,
    ComponentDemo9TemplaterefvarsComponent,
    ComponentDemo10OnewaydatabindingComponent,
    ComponentDemo11TwowaydatabindingComponent,
    ComponentDemo12NgifComponent,
    ComponentDemo13NgswitchComponent,
    ComponentDemo14NgforComponent,
    ComponentDemo15ChildparentComponent,
    ComponentDemo16PipesfiltersComponent,
    ComponentDemo191ServiceemployeelistComponent,
    ComponentDemo192ServiceemployeedetailsComponent,
    ComponentDemo211HttpemployeelistComponent,
    ComponentDemo212HttpemployeeDetailsComponent,
    BlueHighlightDirective,
    HighlightCilckDirective,
    SquareRootPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // 21 1b. add to imports array
    HttpClientModule

  ],
  // 19 2.2. import service in providers its compulsion to insert services in providers array
  providers: [ EmployeeService, EmployeehttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
