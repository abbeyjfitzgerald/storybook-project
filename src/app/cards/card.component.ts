import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar-configurable-example',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ProgressBarConfigurableExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}

export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
