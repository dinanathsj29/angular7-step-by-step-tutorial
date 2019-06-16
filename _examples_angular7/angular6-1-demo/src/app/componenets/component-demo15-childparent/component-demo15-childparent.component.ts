import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-demo15-childparent',
  templateUrl: './component-demo15-childparent.component.html',
  styleUrls: ['./component-demo15-childparent.component.css']
})
export class ComponentDemo15ChildparentComponent implements OnInit {
  // parent to child 

  // receive data data/value coming from parent component
  @Input() public parentData;
  // @Input() public parentName;

  // alias based method
  // @Input('parentData') public parentName;

  // child to parent

  // create child event to send to parent
  @Output() public childEvent = new EventEmitter();

  // child event handler function
  childFireEvent() {
    this.childEvent.emit("Message from Child to Parent");
  }

  constructor() { }

  ngOnInit() {
  }

}
