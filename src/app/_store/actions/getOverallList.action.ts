import { Action } from '@ngrx/store';
import { CovidActionsTypes } from './covidActions.action';

export class GetOverallList implements Action {
    readonly type = CovidActionsTypes.GET_OVERALL_LIST;
    constructor(public payload: any) { }
}

export class GetOverallListResolving implements Action {
    readonly type = CovidActionsTypes.GET_OVERALL_LIST_RESOLVING;
    constructor(public payload: any) { }
}

export class GetOverallListResolved implements Action {
    readonly type = CovidActionsTypes.GET_OVERALL_LIST_RESOLVED;
    constructor(public payload: any) { }
}

export class GetOverallListError implements Action {
    readonly type = CovidActionsTypes.GET_OVERALL_LIST_ERROR;
    constructor(public payload: any) { }
}

export class ResetOverallList implements Action {
    readonly type = CovidActionsTypes.RESET_GET_OVERALL_LIST;
    constructor() { }
}

export type OverallListAction =
    GetOverallList |
    GetOverallListResolving |
    GetOverallListResolved |
    GetOverallListError |
    ResetOverallList;