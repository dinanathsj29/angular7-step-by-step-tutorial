import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo16-pipesfilters',
  templateUrl: './component-demo16-pipesfilters.component.html',
  styleUrls: ['./component-demo16-pipesfilters.component.css']
})
export class ComponentDemo16PipesfiltersComponent implements OnInit {
  public nameText = 'Angular js';
  public messageText = 'Welcome to Angularjs';
  public greetingText = 'angular 2/4/5/6 is component based';

  public objTechnology = {
    'firstName': 'angular',
    'lastName': 'js',
    'version': 6.0
  }

  public number1 = 5.786;

  public currentDate = Date();

  constructor() { }

  ngOnInit() {
  }

}
