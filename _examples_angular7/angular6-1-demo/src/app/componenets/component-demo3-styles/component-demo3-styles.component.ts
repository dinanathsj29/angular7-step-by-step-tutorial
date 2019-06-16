import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo3-styles',
  templateUrl: './component-demo3-styles.component.html',
  //styleUrls: ['./component-demo3-styles.component.css']
  styles: [`
    h1{
      text-align:center;
    }

    div{
      border:2px dashed gray;
    } 
  `]
})
export class ComponentDemo3StylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
