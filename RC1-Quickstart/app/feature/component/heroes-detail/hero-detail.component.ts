import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero }                from '../../model/hero';
import { HeroService }         from '../../service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/feature/component/heroes-detail/hero-detail.component.html',
  styleUrls: ['app/feature/component/heroes-detail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }
  ngOnInit() {
    if (this._routeParams.get('id') !== null) {
      let id = +this._routeParams.get('id');
      this.navigated = true;
      this._heroService.getHero(id)
          .then(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
  }
  save() {

  }
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}
