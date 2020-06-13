import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { API, APIDefinition } from 'ngx-easy-table';
import { Store } from '@ngrx/store';
import * as CovidReducer from '../_store/reducers/covidReducers.reducer';
import * as CovidActions from '../_store/actions';
import { DATA_STATE } from 'ngrx-helpers';
import { RootComponent } from '../root.component';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent extends RootComponent implements OnInit {
  autoSearch: any = [];
  searchDistrict = '';
  initialLoad = true
  responseData: any;
  keyword = 'name';
  configuration: Config;
  innerWidth: number;
  columns: Columns[];
  tableData: any = [];
  toggledRows = new Set<number>();
  dataState: string = "INITIAL";
  @ViewChild('table') table: APIDefinition;
  @HostListener('window:resize', [])
  onResize(): void {
    this.checkView();
  }

  constructor(private _store: Store<any>) {
    super()
  }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.paginationRangeEnabled = false;
    this.configuration.detailsTemplate = true;
    this.configuration.isLoading = true;
    this.subscribeStateData();
    this.dispatchStateData();
    this.checkView();
  }
  get isMobile(): boolean {
    return this.innerWidth <= 768;
  }
  onChange(val): void {
    this.table.apiEvent({
      type: API.onGlobalSearch, value: val,
    });
  }
  subscribeStateData() {
    super.subscribe([this._store.select(CovidReducer.selectStateList)],
      ([list]) => {
        this.autoSearch = [];
        if (list.state === DATA_STATE.RESOLVED) {
          if (list.data) {
            this.searchDistrict = '';
            this.onChange(this.searchDistrict);
            this.responseData = list.data;
            this.autoSearch = this.getAutoSearchData(Object.keys(list.data).sort());
            let stateData = list.data[this.autoSearch[0].name].districtData;
            this.tableData = this.generateTableData(stateData);
            this.initialLoad = false;
            this.configuration.isLoading = false;
          }
        }
      }
    )
  }
  dispatchStateData() {
    this.configuration.isLoading = true;
    let params = [];
    this._store.dispatch(new CovidActions.GetStateList({
      params
    }))
  }

  getAutoSearchData(arr) {
    let searchData = [];
    if (arr.length > 0) {
      arr.forEach((element, index) => {
        searchData.push({
          id: index + 1,
          name: element
        })
      });
    }
    return searchData;
  }
  selectEvent(item) {
    if (this.responseData && !this.initialLoad) {
      this.searchDistrict = '';
      this.onChange(this.searchDistrict);
      let stateData = this.responseData[item['name']].districtData;
      this.tableData = this.generateTableData(stateData);
    }
  }

  onChangeSearch(val: string) { }
  onFocused(e) { }

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
  getStateName(i) {
    return Object.keys(this.tableData)[i];
  }
  checkView(): void {
    this.innerWidth = window.innerWidth;
    if (this.isMobile) {
      this.columns = [
        { key: 'district', title: 'District', },
        { key: 'confirmed', title: 'Confirmed', orderBy: 'desc' },
        { key: '', title: 'More Info' },
      ];

    } else {
      this.columns = [
        { key: 'district', title: 'District' },
        { key: 'confirmed', title: 'Confirmed', orderBy: 'desc' },
        { key: 'active', title: 'Active' },
        { key: 'recovered', title: 'Recovered' },
        { key: 'deaths', title: 'Deaths' }
      ];
    }
  }
  generateTableData(obj) {
    let result = Object.keys(obj)
      .map(key => (
        {
          district: key,
          active: obj[key].active,
          confirmed: obj[key].confirmed,
          deaths: obj[key].deceased,
          recovered: obj[key].recovered
        })
      );
    return result;
  }
}


