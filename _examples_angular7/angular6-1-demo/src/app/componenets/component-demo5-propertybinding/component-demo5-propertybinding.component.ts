import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo5-propertybinding',
  templateUrl: './component-demo5-propertybinding.component.html',
  styleUrls: ['./component-demo5-propertybinding.component.css']
})
export class ComponentDemo5PropertybindingComponent implements OnInit {
  public _id = 'id1';
  public _isDisabled1 = true;
  public _isDisabled2 = false;

  constructor() { }

  ngOnInit() {
  }

}
