import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
    `.custom{
      color:red
    }`
  ]
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
