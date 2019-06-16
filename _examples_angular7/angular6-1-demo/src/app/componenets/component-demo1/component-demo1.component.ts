import { Component, OnInit } from '@angular/core';

@Component({
  // 1. <tag/element> selector
  selector: 'app-component-demo1',
  // 2. .class selector
  // selector: '.app-component-demo1',
  // 3. [attribute] selector
  // selector: '[app-component-demo1]',
  templateUrl: './component-demo1.component.html',
  styleUrls: ['./component-demo1.component.css']
})
export class ComponentDemo1Component implements OnInit {
  private appName:string = 'Angualr 6 Application';

  constructor() { }

  ngOnInit() {
  }

}
