import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-congratulations-message',
  templateUrl: './congratulations-message.component.html',
  styleUrls: ['./congratulations-message.component.css']
})
export class CongratulationsMessageComponent implements OnInit {
  @Input() count: number = 0;
  @Input() threshold: number = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
