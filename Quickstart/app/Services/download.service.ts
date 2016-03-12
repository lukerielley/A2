import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {BaseRepo} from '../Repos/BaseRepo';
import {HeroRepo} from '../Repos/HeroRepo';

import {IHero} from '../interfaces/ihero';

@Injectable({

    providers: [
        BaseRepo,
    ]

})

export class DownloadService {

    private _httpDownloader: Http;
    private _baseUrl: string;
    private _maxRetries: number;
    private _baseRepo: BaseRepo<IHero>;
    
    private _heroRepo: HeroRepo;

    constructor(
        http: Http,
        baseRepo: BaseRepo,
        heroRepo: HeroRepo) {
            
        this._baseRepo = baseRepo;
        this._heroRepo = heroRepo;
        this._httpDownloader = http;
        
        // Could come out of a config URL or be injected?
        this._baseUrl = "https://dl.dropboxusercontent.com/u/13111653/";
        this._maxRetries = 1;
    }

    
    public Get(url: string) : T {
        
        console.log('DOWNLOAD SERVICE GETTING');
        
        if (this._heroRepo)
        {
            this._heroRepo.Get('heroes.json')
                .then(data => {
                    
                    alert('I Have the data now! \n\n' + JSON.stringify(data));
                    
                });
        }
        
        return Promise.resolve(null);
        
        /*
        var deferredResult = new Promise((resolve, reject) => {
            this._httpDownloader.get(this._baseUrl + url)
                .retry(this._maxRetries)
                .map(res => res.json()) // specify that we expect the body type to be parseable as JSON or throw an exception
                .subscribe(
                data => {
                    //alert('Get is done: ' + data);
                    resolve(data);
                },
                err => {
                    reject();
                    console.error('There was an error: ' + err);
                },
                () => {
                    console.log('Random Quote Complete');
                }
                );
        })
        
        return deferredResult;
        */
    }

    public Post(url: string, bodyObject) : T {
        
        // convert our body object to string, as the downloaded expects it
        var bodyAsString : string = JSON.stringify(bodyObject);
        
        var deferredResult = new Promise((resolve, reject) => {
            this._httpDownloader.post(this._baseUrl + url, bodyAsString)
                .retry(this._maxRetries)
                .map(res => res.json()) // specify that we expect the body type to be parseable as JSON or throw an exception
                .subscribe(
                data => {
                    resolve(data);
                },
                err => {
                    reject();
                    console.error('There was an error: ' + err);
                },
                () => {
                    console.log('Random Quote Complete');
                }
                );
        })
        return deferredResult;
    }

    public baseURL() {
        return this._baseUrl;
    }

}