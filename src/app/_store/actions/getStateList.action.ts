import { Action } from '@ngrx/store';
import { CovidActionsTypes } from './covidActions.action';

export class GetStateList implements Action {
    readonly type = CovidActionsTypes.GET_STATE_LIST;
    constructor(public payload: any) { }
}

export class GetStateListResolving implements Action {
    readonly type = CovidActionsTypes.GET_STATE_LIST_RESOLVING;
    constructor(public payload: any) { }
}

export class GetStateListResolved implements Action {
    readonly type = CovidActionsTypes.GET_STATE_LIST_RESOLVED;
    constructor(public payload: any) { }
}

export class GetStateListError implements Action {
    readonly type = CovidActionsTypes.GET_STATE_LIST_ERROR;
    constructor(public payload: any) { }
}

export class ResetStateList implements Action {
    readonly type = CovidActionsTypes.RESET_GET_STATE_LIST;
    constructor() { }
}

export type StateListAction =
    GetStateList |
    GetStateListResolving |
    GetStateListResolved |
    GetStateListError |
    ResetStateList;