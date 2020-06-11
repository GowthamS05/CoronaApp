import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { API, APIDefinition } from 'ngx-easy-table';
import { Store } from '@ngrx/store';
import * as CovidReducer from '../_store/reducers/covidReducers.reducer';
import * as CovidActions from '../_store/actions';
import { DATA_STATE } from 'ngrx-helpers';
import { RootComponent } from '../root.component';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent extends RootComponent implements OnInit {
  configuration: Config;
  innerWidth: number;
  columns: Columns[];
  data: any = [];
  toggledRows = new Set<number>();
  dataState: string = "INITIAL";


  @ViewChild('table', { static: true }) table: APIDefinition;

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkView();
  }

  constructor(private _store: Store<any>) {
    super();
  }


  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.detailsTemplate = true;
    this.configuration.isLoading = true;
    this.configuration.paginationRangeEnabled = false;
    this.subscribeCountryData();
    this.dispatchCountryData();
    this.checkView();
  }

  get isMobile(): boolean {
    return this.innerWidth <= 768;
  }
  onChange(name: string): void {
    this.table.apiEvent({
      type: API.onGlobalSearch, value: name,
    });
  }

  subscribeCountryData() {
    super.subscribe([this._store.select(CovidReducer.selectCountryList)],
      ([list]) => {
        this.dataState = list.state;
        if (list.state === DATA_STATE.RESOLVED) {
          this.data = list.data;
          this.configuration.isLoading = false;
        }

      }
    )
  }
  dispatchCountryData() {
    this.configuration.isLoading = true;
    let params = [];
    this._store.dispatch(new CovidActions.GetCountryList({
      params
    }))
  }

  checkView(): void {
    this.innerWidth = window.innerWidth;
    if (this.isMobile) {
      this.columns = [
        { key: 'country', title: `Country`, orderBy: 'asc' },
        { key: 'cases', title: 'Cases' },
        { key: '', title: 'More Info' },
      ];

    } else {
      this.columns = [
        { key: 'country', title: 'Country', orderBy: 'asc' },
        { key: 'cases', title: 'Cases' },
        { key: 'recovered', title: 'Recovered' },
        { key: 'active', title: 'Active' },
        { key: 'deaths', title: 'Deaths' },
        { key: '', title: 'More Info' },
      ];
    }
  }

  onRowClickEvent($event: MouseEvent, index: number): void {
    $event.preventDefault();
    this.table.apiEvent({
      type: API.toggleRowIndex,
      value: index,
    });
    if (this.toggledRows.has(index)) {
      this.toggledRows.delete(index);
    } else {
      this.toggledRows.add(index);
    }
  }
}


