import { Component, OnInit } from 'angular2/core';

import { IHero } from '../interfaces/ihero';
import { HeroService } from '../services/hero.service';
import {IUser,User} from '../interfaces/User';

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
    simpleBinding: string;
    differentBinding: string;
    invalid: boolean;
    currentUser: User;
    
    specialNumber: number;

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
            
            this.simpleBinding = "Hello World";
            this.invalid = true;
            this.differentBinding = "There are different ways to bind this text";
            
            this.currentUser = new User();
            this.currentUser.firstname = "Luke";
            this.currentUser.lastname = "Rielley";
            
            this.planType = 1;
            
        }


    routerOnActivate(nextInstruction, prevInstruction) { 
        console.log("DashboardComponent - routerOnActivate"); 
    }
    
    routerOnDeactivate(nextInstruction, prevInstruction) { 
        console.log("DashboardComponent - routerOnDeactivate"); 
    }
    
    routerCanDeactivate(nextInstruction, prevInstruction) {
        console.log("DashboardComponent - routerCanDeactivate"); 
        var result = confirm("Are you sure you want to leave this page?");
        return result;
    }

    ngOnInit() {
        
        console.log("DashboardComponent - ngOnInit");
        
        //this._heroService.getHeroesAndVillans();
        
        this._heroService.getHeroes()
            .then(heroes => {
                
                // check the data
                if (heroes && heroes.length > 5) {
                    this.heroes = heroes.slice(1, 5)
                }
                
            });
    }
    
    ngAfterViewInit() {
        console.log("DashboardComponent - ngAfterViewInit");
    }
    
    ngOnDestroy() {
        console.log("DashboardComponent - ngOnDestroy");
    }
    
    
    
    showValues() {
        
        var msg = "";
        
        msg += "simpleBinding = " + this.simpleBinding;
        msg += "\n";
        
        alert(msg);
        
    }

    gotoDetail(hero: IHero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }


}
