import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() data: any;
  date: string;
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      if (changes.data.currentValue) {
        let res = changes.data.currentValue;
        this.date = res.date;
        this.counter("count1", res.confirmed - 50, res.confirmed, 3000);
        this.counter("count2", res.recovered - 50, res.recovered, 3000);
        this.counter("count3", res.deaths - 50, res.deaths, 3000);
      }
    }
  }

  counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    if (end > start) {
      let current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    }
    else {
      obj.textContent = end;
    }
  }
  addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
}
