import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // create a property to send from parent to child
  parentMessage = 'From Parent';
  
  // child to parent
  messageChild;
}
