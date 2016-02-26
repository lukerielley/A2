
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {IHero} from '../interfaces/ihero';
import {HEROES} from '../mocks/mock-heroes';
import 'rxjs/Rx';

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

    public getHeroes() : Promise {
        
        let header = new Headers();

        this._http.get('https://dl.dropboxusercontent.com/u/13111653/heroes.json')
            .retry(2)
			.map(res => res.text())
		    .subscribe(
		      data => console.log(data),
		      err => console.error('There was an error: ' + err),
		      () => console.log('Random Quote Complete')
			);
        
        // get our heros
        return Promise.resolve(HEROES);

    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly() : Promise {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) : IHero {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }


}
