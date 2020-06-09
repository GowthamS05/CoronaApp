import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RootComponent } from './../root.component';
import { Store } from '@ngrx/store';
import * as CovidReducer from '../_store/reducers/covidReducers.reducer';
import * as CovidActions from '../_store/actions';
import { DATA_STATE } from 'ngrx-helpers';

@Component({
  selector: 'app-world-list',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent extends RootComponent implements OnInit {
  data: any = {}
  cases: any = {};
  deaths: any = {};
  recovered: any = {};
  dataState: string = "INITIAL";

  constructor(private _store: Store<any>) {
    super();
  }

  ngOnInit() {
    this.subscribeOverallData();
    this.dispatchOverallData();
  }

  subscribeOverallData() {
    super.subscribe([this._store.select(CovidReducer.selectOverallList)],
      ([list]) => {
        this.dataState = list.state;
        if (list.state === DATA_STATE.RESOLVED) {
          this.cases = { label: 'Total Cases', value: list.data.cases, color: 'orange' };
          this.deaths = { label: 'Total Deaths', value: list.data.deaths, color: 'red' };
          this.recovered = { label: 'Total Recovered', value: list.data.recovered, color: 'green' };
        }

      }
    )
  }
  dispatchOverallData() {
    let params = [];
    this._store.dispatch(new CovidActions.GetOverallList({
      params
    }))
  }

}
