import { NgrxArray, DATA_STATE, StoreUtil } from 'ngrx-helpers';
import { CovidActionsTypes } from './../actions/covidActions.action';
import { OverallListAction } from './../actions/getOverallList.action';

export interface OverallListState {
    overallList: NgrxArray<any>
}

export const initialState: OverallListState = {
    overallList: {
        state: DATA_STATE.INITIAL,
        data: []
    }
}

export function OverallListReducer(state = initialState, action: OverallListAction): OverallListState {
    switch (action.type) {
        case CovidActionsTypes.GET_OVERALL_LIST_RESOLVING:
            return StoreUtil.setResolving(state, 'overallList', []);
        case CovidActionsTypes.GET_OVERALL_LIST_RESOLVED:
            return StoreUtil.setResolved(state, 'overallList', action.payload.data);
        case CovidActionsTypes.GET_OVERALL_LIST_ERROR:
            return StoreUtil.setError(state, 'overallList', action.payload.data);
        case CovidActionsTypes.RESET_GET_OVERALL_LIST:
            return (state = initialState);

        default: return state;
    }
}

