import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  

  doSomething(): void {
    alert("doing something")
  }

  doSomething1(): void {
    alert("doing something 1")
  }

  doSomething2(): void {
    alert("doing something 2")
  }

  doSomething3(): void {
    alert("doing something 3")
  }


}
