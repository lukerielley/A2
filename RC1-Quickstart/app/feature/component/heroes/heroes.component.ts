import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import { Hero }                from '../../model/hero';
import { HeroService }         from '../../service/hero.service';
import { HeroDetailComponent } from '../../component/heroes-detail/hero-detail.component';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/feature/component/heroes/heroes.component.html',
  styleUrls:  ['app/feature/component/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  getHeroes() {
    this._heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error); // TODO: Display error message
  }
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  delete(hero: Hero, event: any) {

  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.addingHero = false;
  }
  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
