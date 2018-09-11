import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html'
})

export class AllCountriesComponent implements OnInit {
  region: any;
  countryname: any;
  language:any;
  public allCountries:any = [];

  constructor(
    private _allCountries: AppService, 
    private _route: ActivatedRoute, 
    private location: Location
  ) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get('region');
    this._allCountries.getCountriesByRegion(this.region).subscribe
    (data => {
      document.querySelector('.footer').classList.add('active-footer');
      document.querySelector('.footer').classList.add('active-footer-mobile');
      this.allCountries = data;
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
