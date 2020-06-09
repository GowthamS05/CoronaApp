import { Action } from '@ngrx/store';
import { CovidActionsTypes } from './covidActions.action';

export class GetCountryList implements Action {
    readonly type = CovidActionsTypes.GET_COUNTRY_LIST;
    constructor(public payload: any) { }
}

export class GetCountryListResolving implements Action {
    readonly type = CovidActionsTypes.GET_COUNTRY_LIST_RESOLVING;
    constructor(public payload: any) { }
}

export class GetCountryListResolved implements Action {
    readonly type = CovidActionsTypes.GET_COUNTRY_LIST_RESOLVED;
    constructor(public payload: any) { }
}

export class GetCountryListError implements Action {
    readonly type = CovidActionsTypes.GET_COUNTRY_LIST_ERROR;
    constructor(public payload: any) { }
}

export class ResetCountryList implements Action {
    readonly type = CovidActionsTypes.RESET_GET_COUNTRY_LIST;
    constructor() { }
}

export type CountryListAction =
    GetCountryList |
    GetCountryListResolving |
    GetCountryListResolved |
    GetCountryListError |
    ResetCountryList;