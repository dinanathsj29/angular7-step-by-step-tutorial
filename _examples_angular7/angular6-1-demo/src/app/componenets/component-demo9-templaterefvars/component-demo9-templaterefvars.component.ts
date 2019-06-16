import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo9-templaterefvars',
  templateUrl: './component-demo9-templaterefvars.component.html',
  styleUrls: ['./component-demo9-templaterefvars.component.css']
})
export class ComponentDemo9TemplaterefvarsComponent implements OnInit {
  logDetails(_value) {
    console.log(_value);
  }

  constructor() { }

  ngOnInit() {
  }

}