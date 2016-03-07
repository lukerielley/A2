import { Component, OnInit } from 'angular2/core';

import { IHero } from '../interfaces/ihero';
import { HeroService } from '../services/hero.service';

import {Router} from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    //template: '<h3>My Dashboard</h3>'
    templateUrl: './app/templates/dashboard.component.html',
    styleUrls: [
        'app/styles/dashboard.component.css'
    ]
})

export class DashboardComponent {

    heroes: IHero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) {

    }

    ngOnInit() {
        
        //this._heroService.getHeroesAndVillans();
        
        this._heroService.getHeroes()
            .then(heroes => {
                
                // check the data
                if (heroes && heroes.length > 5) {
                    this.heroes = heroes.slice(1, 5)
                }
                
            });
    }

    gotoDetail(hero: IHero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }


}
