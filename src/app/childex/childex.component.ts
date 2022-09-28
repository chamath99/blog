import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childex',
  templateUrl: './childex.component.html',
  styleUrls: ['./childex.component.css']
})
export class ChildexComponent implements OnInit {

  @Output() updateDataEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
