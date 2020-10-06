import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

const modules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
];

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { GaugeChartModule } from 'angular-gauge-chart'
import { EsgGaugeComponent } from './esg-gauge/esg-gauge.component';
import { CompanyEsgInfoComponent } from './company-esg-info/company-esg-info.component';
import { CompareEsgInfoComponent } from './compare-esg-info/compare-esg-info.component';
import { CompanyEsgGaugeDetailsComponent } from './company-esg-info/company-esg-gauge-details/company-esg-gauge-details.component';
import { CompareEsgGaugeDetailsComponent } from './compare-esg-info/compare-esg-gauge-details/compare-esg-gauge-details.component';
import { CompanyScoreDetailsComponent } from './company-esg-info/company-score-details/company-score-details.component';
import { CompareScoreDetailsComponent } from './compare-esg-info/compare-score-details/compare-score-details.component';
import { GlobalCompanySearchComponent } from './global-company-search/global-company-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EsgGaugeComponent,
    CompanyEsgInfoComponent,
    CompareEsgInfoComponent,
    CompanyEsgGaugeDetailsComponent,
    CompareEsgGaugeDetailsComponent,
    CompanyScoreDetailsComponent,
    CompareScoreDetailsComponent,
    GlobalCompanySearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    modules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GaugeChartModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:'globalSearch', pathMatch: 'full' 
      },
      {
        path: 'globalSearch', component: GlobalCompanySearchComponent, children: [
          { path: '', redirectTo: 'companyEsgInfo/1', pathMatch: 'full' },
          { path: 'companyEsgInfo/:id', component: CompanyEsgInfoComponent },
          { path: 'compareEsgInfo', component: CompareEsgInfoComponent }
        ]
      }
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
    ], { initialNavigation: 'enabled' }),
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
