import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {IHero} from '../interfaces/ihero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/templates/hero-detail.component.html',
    inputs: ['hero'],
    styleUrls: [
        'app/styles/hero-detail.component.css'
    ]
})

export class HeroDetailComponent implements OnInit {

    hero: IHero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {

        let id = + this._routeParams.get('id');

        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

}