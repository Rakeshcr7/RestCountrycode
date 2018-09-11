import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit {
  language:any;
  allCountries;
  languageName:any;
  constructor(private _allCountries: AppService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.remove('active-footer-mobile');
    this.language = this._route.snapshot.paramMap.get('language');
    this.languageName = this._route.snapshot.paramMap.get('name');
    this._allCountries.getCountriesByLang(this.language).subscribe
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
