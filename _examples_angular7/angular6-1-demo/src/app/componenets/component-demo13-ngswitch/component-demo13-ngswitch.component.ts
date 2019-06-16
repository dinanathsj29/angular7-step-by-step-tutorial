import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo13-ngswitch',
  templateUrl: './component-demo13-ngswitch.component.html',
  styleUrls: ['./component-demo13-ngswitch.component.css']
})
export class ComponentDemo13NgswitchComponent implements OnInit {
  public curColor='red';
  // public curColor='green';
  // public curColor = 'blue';

  // public curColor = 'black';

  constructor() { }

  ngOnInit() {
  }

}
