import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.scss']
})
export class UnorderedListComponent implements OnInit {

  help: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
