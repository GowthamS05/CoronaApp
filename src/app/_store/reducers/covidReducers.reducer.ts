import { CovidActions } from './../actions/covidActions.action';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOverallList from './getOverallList.reducer';
import * as fromCountryList from './getCountryList.reducer';

export interface CovidState {
    overallListData: fromOverallList.OverallListState;
    countryListData: fromCountryList.CountryListState;
}

export const CovidReducer: ActionReducerMap<CovidState, CovidActions> = {
    overallListData: fromOverallList.OverallListReducer,
    countryListData: fromCountryList.CountryListReducer
}

export const selectCovidState = createFeatureSelector<CovidState>('covid')

export const selectOverallList = createSelector(
    createSelector(selectCovidState, (state: CovidState) => state.overallListData),
    (state: fromOverallList.OverallListState) => state.overallList
);
export const selectCountryList = createSelector(
    createSelector(selectCovidState, (state: CovidState) => state.countryListData),
    (state: fromCountryList.CountryListState) => state.countryList
);