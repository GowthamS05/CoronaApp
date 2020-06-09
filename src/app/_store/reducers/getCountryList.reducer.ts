import { NgrxArray, DATA_STATE, StoreUtil } from 'ngrx-helpers';
import { CovidActionsTypes } from './../actions/covidActions.action';
import { CountryListAction } from './../actions/getCountryList.action';

export interface CountryListState {
    countryList: NgrxArray<any>
}

export const initialState: CountryListState = {
    countryList: {
        state: DATA_STATE.INITIAL,
        data: []
    }
}

export function CountryListReducer(state = initialState, action: CountryListAction): CountryListState {
    switch (action.type) {
        case CovidActionsTypes.GET_COUNTRY_LIST_RESOLVING:
            return StoreUtil.setResolving(state, 'countryList', []);
        case CovidActionsTypes.GET_COUNTRY_LIST_RESOLVED:
            return StoreUtil.setResolved(state, 'countryList', action.payload.data);
        case CovidActionsTypes.GET_COUNTRY_LIST_ERROR:
            return StoreUtil.setError(state, 'countryList', action.payload.data);
        case CovidActionsTypes.RESET_GET_COUNTRY_LIST:
            return (state = initialState);
        default: return state;
    }
}

