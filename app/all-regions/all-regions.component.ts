import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html'
})
export class AllRegionsComponent implements OnInit {

 public regionsArray = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ]
  
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.add('active-footer-mobile');
  }
}
