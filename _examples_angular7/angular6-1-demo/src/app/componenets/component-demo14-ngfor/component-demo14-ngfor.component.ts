import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo14-ngfor',
  templateUrl: './component-demo14-ngfor.component.html',
  styleUrls: ['./component-demo14-ngfor.component.css']
})
export class ComponentDemo14NgforComponent implements OnInit {
  // public arrColors = ['red', 'green', 'blue','cyan','magenta','black'];
  public arrColors = ['red', 'green', 'blue'];

  constructor() { }

  ngOnInit() {
  }

}
