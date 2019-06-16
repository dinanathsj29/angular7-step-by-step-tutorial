import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo4-interpolation',
  templateUrl: './component-demo4-interpolation.component.html',
  styleUrls: ['./component-demo4-interpolation.component.css']
})
export class ComponentDemo4InterpolationComponent implements OnInit {
  // variables - class members
  public technology = 'Angular 6';
  public userName = 'Dinanath';
  // public siteUrl = 'http://www.google.com';
  public siteUrl = window.location.href;

  fn_showGreetingsToUser() {
    return 'Welcome ' + this.userName;
  }

  fn_showMessage() {
    return 'Welcome to ' + this.technology + ' ' + this.userName;
  }

  constructor() { }

  ngOnInit() {
  }

}
