import { CovidActions } from './../actions/covidActions.action';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOverallList from './getOverallList.reducer';
import * as fromCountryList from './getCountryList.reducer';
import * as fromStateList from './getStateList.reducer';

export interface CovidState {
    overallListData: fromOverallList.OverallListState;
    countryListData: fromCountryList.CountryListState;
    stateListData: fromStateList.StateListState;
}

export const CovidReducer: ActionReducerMap<CovidState, CovidActions> = {
    overallListData: fromOverallList.OverallListReducer,
    countryListData: fromCountryList.CountryListReducer,
    stateListData: fromStateList.StateListReducer
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
export const selectStateList = createSelector(
    createSelector(selectCovidState, (state: CovidState) => state.stateListData),
    (state: fromStateList.StateListState) => state.stateList
);