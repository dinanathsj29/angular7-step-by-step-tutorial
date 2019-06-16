import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo2-template',
  templateUrl: './component-demo2-template.component.html',

  // single line template
  // template: '<h1>Inline single template para used </h1>',

  // multi line template
  template:`
    <h1>component-demo2-template templateUrl works!</h1>

    <h2>template</h2>
    template denotes writing html markup in current class file only, template property can help to write all html/markup in .ts typescript file itself.
  
    <p> Multiple line template </p>
    <div> template written in same .ts file </div>
    `,
  styleUrls: ['./component-demo2-template.component.css']
})
export class ComponentDemo2TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
