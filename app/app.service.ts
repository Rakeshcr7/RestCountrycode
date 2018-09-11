import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
 
  getCountriesByRegion(region) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  getCountriesByLang(language) {
    return this.http.get(`https://restcountries.eu/rest/v2/lang/${language}`);
  }

  getCountriesByCurrency(currency) {
    return this.http.get(`https://restcountries.eu/rest/v2/currency/${currency}`);
  }
  
  getAllCountries() {
    return this.http.get(`https://restcountries.eu/rest/v2/all`);
  }
}
