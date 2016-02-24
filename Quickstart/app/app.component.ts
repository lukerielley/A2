import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroService} from './services/hero.service';
import {HeroesComponent} from './components/heroes.component';

@Component({
    
    selector: 'my-app',

    template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
    `,

    directives: [
        ROUTER_DIRECTIVES
    ],

    providers: [
        ROUTER_DIRECTIVES,
        HeroService
    ]
  
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
    title = 'Tour of Heroes';
}