import { NgrxArray, DATA_STATE, StoreUtil } from 'ngrx-helpers';
import { CovidActionsTypes } from './../actions/covidActions.action';
import { StateListAction } from './../actions/getStateList.action';

export interface StateListState {
    stateList: NgrxArray<any>
}

export const initialState: StateListState = {
    stateList: {
        state: DATA_STATE.INITIAL,
        data: []
    }
}

export function StateListReducer(state = initialState, action: StateListAction): StateListState {
    switch (action.type) {
        case CovidActionsTypes.GET_STATE_LIST_RESOLVING:
            return StoreUtil.setResolving(state, 'stateList', []);
        case CovidActionsTypes.GET_STATE_LIST_RESOLVED:
            return StoreUtil.setResolved(state, 'stateList', action.payload.data);
        case CovidActionsTypes.GET_STATE_LIST_ERROR:
            return StoreUtil.setError(state, 'stateList', action.payload.data);
        case CovidActionsTypes.RESET_GET_STATE_LIST:
            return (state = initialState);
        default: return state;
    }
}

