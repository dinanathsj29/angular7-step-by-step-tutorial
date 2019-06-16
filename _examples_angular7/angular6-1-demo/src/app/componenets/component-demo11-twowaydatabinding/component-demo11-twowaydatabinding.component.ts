import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo11-twowaydatabinding',
  templateUrl: './component-demo11-twowaydatabinding.component.html',
  styleUrls: ['./component-demo11-twowaydatabinding.component.css']
})
export class ComponentDemo11TwowaydatabindingComponent implements OnInit {
  public nameText = 'Angular 7';
  
  constructor() { }

  ngOnInit() {
  }

}
