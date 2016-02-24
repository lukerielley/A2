// Angular 2 Usings
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {IHero} from '../interfaces/ihero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero.service';

@Component({

    selector: 'my-heroes',
    
    // The components we want to make use of
    directives: [
        HeroDetailComponent
    ],
    
    // our DI declarations
    // providers: [HeroService], THIS IS REMOVED FROM HERE, AS IT IS NOW DECLARED HIGHER IN APP.COMPONENT

    templateUrl: './app/templates/heroes.component.html',
    
    styleUrls:  [
        'app/styles/heroes.component.css'
    ],
    
})

export class HeroesComponent implements OnInit {

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    public title = 'Tour of Heroes';

    public heroes = HEROES;

    selectedHero: IHero;

    onSelect(hero: IHero) { 
        //alert('You have selected the hero "' + hero.name + '"');
        this.selectedHero = hero;
    };

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }   

}

// contains our list of heros
var HEROES: IHero[] = [];
