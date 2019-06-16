import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo7-stylebinding',
  templateUrl: './component-demo7-stylebinding.component.html',
  styleUrls: ['./component-demo7-stylebinding.component.css']
})
export class ComponentDemo7StylebindingComponent implements OnInit {
  public greenColor = 'green';
  public redColor = 'red';
  public orangeColor = 'orange';
  public hasError = true;

  public headerStyles = {
    color: 'blue',
    textDecoration: 'line-through',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
