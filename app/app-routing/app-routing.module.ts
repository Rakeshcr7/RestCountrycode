import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AllRegionsComponent } from '../all-regions/all-regions.component';
import { AllCountriesComponent } from '../all-countries/all-countries.component';
import { SingleCountryComponent } from '../single-country/single-country.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LanguageComponent } from '../language/language.component';
import { CurrencyComponent } from '../currency/currency.component';

const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  { path: 'regions', component: AllRegionsComponent },
  { path: 'allcountries/:region', component: AllCountriesComponent },
  { path: 'language/:language/:name', component: LanguageComponent },
  { path: 'currency/:currency', component: CurrencyComponent },
  { path: 'country/:country', component: SingleCountryComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [AllRegionsComponent, AllCountriesComponent, SingleCountryComponent, LanguageComponent, CurrencyComponent, NotFoundComponent]