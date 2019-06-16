import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo12-ngif',
  templateUrl: './component-demo12-ngif.component.html',
  styleUrls: ['./component-demo12-ngif.component.css']
})
export class ComponentDemo12NgifComponent implements OnInit {
  public isShow=true;
  public hasDisplay=false;

  constructor() { }

  ngOnInit() {
  }

}
