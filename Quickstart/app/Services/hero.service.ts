
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {IHero} from '../interfaces/ihero';
import {HEROES} from '../mocks/mock-heroes';

@Injectable({
    
    providers: [
        HTTP_PROVIDERS,
    ]
    
})

export class HeroService {
    
    private _http : Http;
    
    constructor(
        http: Http) 
    {
        this._http = http;   
    }

    getHeroes() {
        
        this._http.get('http://localhost:6969/heroes.json')
        
        // get our heros
        return Promise.resolve(HEROES);

    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }


}
