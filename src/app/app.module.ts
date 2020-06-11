import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as fromCovid from './_store/reducers/covidReducers.reducer';
import { AppComponent } from './app.component';
import { StackbarchartComponent } from './component/stackbarchart/stackbarchart.component';
import { ResultcardsComponent } from './component/resultcards/resultcards.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { NgrxHelperModule } from 'ngrx-helpers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CovidEffects } from './_store/effects/covid.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { WorldListComponent } from './world-list/world-list.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'ngx-easy-table';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
export const router: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    { path: 'world', component: WorldListComponent },
    { path: 'overall', component: AllCountriesComponent },
    { path: '', redirectTo: 'world', pathMatch: 'full' }
  ]
}
];
@NgModule({
  declarations: [
    AppComponent,
    StackbarchartComponent,
    ResultcardsComponent,
    MaincontainerComponent,
    NavbarComponent,
    FooterComponent,
    AllCountriesComponent,
    WorldListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgrxHelperModule,
    ThemeModule,
    RouterModule.forRoot(router),
    StoreModule.forRoot({}),
    StoreModule.forFeature('covid', fromCovid.CovidReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([CovidEffects]),
    TableModule,
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'Covid Devtools'
    }) : []
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
