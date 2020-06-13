import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CovidActionsTypes } from './../actions/covidActions.action';
import { HttpClient } from '@angular/common/http';
import { NgrxEffect, HttpMethod } from 'ngrx-helpers';
import { covidEndpoint } from '../endpoints/endpoints';

@Injectable()
export class CovidEffects extends NgrxEffect {
    constructor(actions$: Actions, http: HttpClient) {
        super(actions$, http)
    }

    @Effect() getOveralList$ = super.effect({
        action: CovidActionsTypes.GET_OVERALL_LIST,
        type: HttpMethod.GET,
        endpoint: covidEndpoint.GET_OVERALL_DETAIL
    })
    @Effect() getCountryList$ = super.effect({
        action: CovidActionsTypes.GET_COUNTRY_LIST,
        type: HttpMethod.GET,
        endpoint: covidEndpoint.GET_COUNTRY_DETAIL
    })
    @Effect() getStateList$ = super.effect({
        action: CovidActionsTypes.GET_STATE_LIST,
        type: HttpMethod.GET,
        endpoint: covidEndpoint.GET_STATE_DETAIL
    })
}

