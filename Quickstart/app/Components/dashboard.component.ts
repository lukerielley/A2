import { Component, OnInit } from 'angular2/core';

import { IHero } from '../interfaces/ihero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-dashboard',
    //template: '<h3>My Dashboard</h3>'
    templateUrl: './app/templates/dashboard.component.html'
})

export class DashboardComponent {

    heroes: IHero[] = [];
    
    constructor(private _heroService: HeroService) { 
        
    }
    
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    
    gotoDetail() {
        
    }

}
