import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo6-classbinding',
  templateUrl: './component-demo6-classbinding.component.html',
  styleUrls: ['./component-demo6-classbinding.component.css']
})
export class ComponentDemo6ClassbindingComponent implements OnInit {
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public isSpecialClass = true;
  public isErrorClass = true;

  public messageClasses = {
    'text-primary': this.isSpecialClass,
    'text-strikethrough': this.isSpecialClass
  }

  constructor() { }

  ngOnInit() {
  }

}
