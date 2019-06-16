import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo10-onewaydatabinding',
  templateUrl: './component-demo10-onewaydatabinding.component.html',
  styleUrls: ['./component-demo10-onewaydatabinding.component.css']
})
export class ComponentDemo10OnewaydatabindingComponent implements OnInit {
  public inputResultValue = 'One Way Data Binding!';

  public userNameText = 'Angular 7';

  public changeInputText(evt) {
    console.log(evt);
    this.userNameText = evt.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
