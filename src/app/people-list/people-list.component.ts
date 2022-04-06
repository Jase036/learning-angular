import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people= [
    {
    name: 'John',
    age: 34,
    hairColor: 'brown',
    },
    {
      name: 'Jane',
      age: 26,
      hairColor: 'red',
      },
    {
      name: 'Bob',
      age: 62,
      hairColor: 'gray',
    },
];
  constructor() { }

  ngOnInit(): void {
  }

}
