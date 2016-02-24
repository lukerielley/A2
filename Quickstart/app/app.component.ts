import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroService} from './services/hero.service';
import {HeroesComponent} from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail.component';

@Component({
    
    selector: 'my-app',
    
    styleUrls: [
        'app/styles/app.component.css'
    ],

    template: `
    <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
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
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
])

export class AppComponent {
    title = 'Tour of Heroes';
}