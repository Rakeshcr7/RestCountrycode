import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html'
})

export class SingleCountryComponent implements OnInit {
  public country: any;
  public detail: any;
  public currentCountry: any;
  public countryName: any;

  constructor(
    private _country: AppService, 
    private _route: ActivatedRoute, 
    private router: Router, 
    private location: Location
  ) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.remove('active-footer-mobile');
    this.countryName = this._route.snapshot.paramMap.get('country');
    this._country.getAllCountries().subscribe(
      data => {
        document.querySelector('.footer').classList.add('active-footer');
        document.querySelector('.footer').classList.add('active-footer-mobile');
        this.country = data;  

      for (let i in this.country) {
          if ((this.country[i].name) == this.countryName) {
            this.currentCountry = this.country[i];
          }
        }
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }
  // Method for previous page
goBackToPreviousPage(): any {
  this.location.back();
}
}
