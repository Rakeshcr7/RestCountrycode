import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {

  currency: any;
  allCountries;
  constructor(
   private _allCountries: AppService, 
   private _route: ActivatedRoute, 
   private location: Location
  ) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.remove('active-footer-mobile');

    this.currency = this._route.snapshot.paramMap.get('currency');
    this._allCountries.getCountriesByCurrency(this.currency).subscribe
      (data => {
        this.allCountries = data;
        document.querySelector('.footer').classList.add('active-footer');
        document.querySelector('.footer').classList.add('active-footer-mobile');
      },
      error => {
        console.log(error);
      })
  }
  // Method for previous page
  goBackToPreviousPage(): any {
    this.location.back();
  }
}
