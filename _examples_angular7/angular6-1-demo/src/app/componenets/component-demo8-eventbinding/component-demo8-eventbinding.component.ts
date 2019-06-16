import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo8-eventbinding',
  templateUrl: './component-demo8-eventbinding.component.html',
  styleUrls: ['./component-demo8-eventbinding.component.css']
})
export class ComponentDemo8EventbindingComponent implements OnInit {
  public isButtonClicked = false;
  public greetingMessage = '';
  public eventType = '';
  // public withoutHandlerMessage = '';

  fn_changeStyles() {
    this.isButtonClicked = !this.isButtonClicked;
    this.greetingMessage = 'welcome to event binding';
  }

  fn_checkClick(evt) {
    console.log(evt);
    this.eventType = evt.type;
  }

  constructor() { }

  ngOnInit() {
  }

}
