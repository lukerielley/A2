import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router-deprecated';


import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/feature/component/dashboard/dashboard.component.html',
  styleUrls: ['app/feature/component/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(
  private router: Router,
  private heroService: HeroService) {
}

  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
  
  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
    }

}
