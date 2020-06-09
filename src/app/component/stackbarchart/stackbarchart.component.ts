import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stackbarchart',
  templateUrl: './stackbarchart.component.html',
  styleUrls: ['./stackbarchart.component.css']
})
export class StackbarchartComponent implements OnInit, OnChanges {
  @Input() data: any;
  recoveredPercent: number;
  deathsPercent: number;
  confirmedPercent: number;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      if (changes.data.currentValue) {
        this.recoveredPercent = this.getRecoveredValue(changes.data.currentValue);
        this.deathsPercent = this.getDeathValue(changes.data.currentValue);
        this.confirmedPercent = this.getConfirmedValue(changes.data.currentValue) - this.recoveredPercent - this.deathsPercent;
      }
    }
  }


  getRecoveredValue(data) {
    return Math.round((data["recovered"] / data["confirmed"]) * 100);
  }
  getDeathValue(data) {
    return Math.round((data["deaths"] / data["confirmed"]) * 100);
  }
  getConfirmedValue(data) {
    return Math.round((data["confirmed"] / data["confirmed"]) * 100);
  }


}
