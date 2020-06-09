import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultcards',
  templateUrl: './resultcards.component.html',
  styleUrls: ['./resultcards.component.css']
})
export class ResultcardsComponent implements OnInit {
  @Input() data: any;
  response: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      if (changes.data.currentValue) {
        this.response = changes.data.currentValue;
      }
    }
  }
}
