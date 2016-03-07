import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {DownloadService} from '../services/download.service';

import {IHero} from '../interfaces/ihero';
import {HEROES} from '../mocks/mock-heroes';
import {Observable} from 'rxjs/Rx';

@Injectable({

    providers: [
        HTTP_PROVIDERS,
    ]

})

export class HeroService {

    private _http: Http;
    private _downloadService: DownloadService;

    constructor(
        http: Http,
        downloadService: DownloadService) {
        this._http = http;
        this._downloadService = downloadService;
    }
    
    // Luke testing 
    public getHeroesAndVillans() {

        //alert('Starting!');
        //var pageRequests: Promise[];

        //pageRequests.push(this._downloadService.Get("heroes.json");
        
        Observable.forkJoin(
            this._http.get('https://dl.dropboxusercontent.com/u/13111653/heroes.json').map((res: Response) => res.json()),
            this._http.get('https://dl.dropboxusercontent.com/u/13111653/heroes.json').map((res: Response) => res.json())
        ).subscribe(
            data => {
                
                // data is an arrary of the request results
                
                //this.books = data[0]
                //this.movies = data[1]
                //alert('Ok, I have your heroes and villans. ' + data[0].length + ', ' + data[1].length);
            },
            err => {
                console.error(err)
            }),
            () => {
                console.log('Complete');
            });
    }

    public getHeroes(): Promise {
        return this._downloadService.Get("heroes.json");
    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly(): Promise {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number): IHero {

        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );

    }


}
