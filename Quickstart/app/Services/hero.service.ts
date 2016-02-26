import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {DownloadService} from '../services/download.service';

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
    private _downloadService : DownloadService;
    
    constructor(
        http: Http,
        downloadService : DownloadService) 
    {
        this._http = http;   
        this._downloadService = downloadService;
    }

    public getHeroes() : Promise {
        
        return this._downloadService.Get("heroes.json");

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
