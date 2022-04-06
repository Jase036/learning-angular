import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {
  message = "I'm a component"
  constructor() { }

  ngOnInit(): void {
  }

  doSomething(message: string): void {
    alert('The button says: ' + message);
  }

  doSomethingElse(text: string): void {
    alert('Told you not to do that, ' + text);
  }


}
