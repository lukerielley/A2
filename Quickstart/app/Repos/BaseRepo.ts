import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {IBaseRepo} from '../interfaces/iBaseRepo';

@Injectable()

export class BaseRepo<T> implements IBaseRepo<T> {
    
    private _httpDownloader: Http;
    private _baseUrl: string;
    private _maxRetries: number;
    
    private _activeRequests: number;

    constructor(
        http: Http) {
        this._httpDownloader = http;
        
        // Could come out of a config URL or be injected?
        this._baseUrl = "https://dl.dropboxusercontent.com/u/13111653/";
        this._maxRetries = 1;
        
        this._activeRequests = 0;
        
    }

    
    public Get(url: string) : Promise<T> {
        var deferredResult = new Promise((resolve, reject) => {
            this._activeRequests++;
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
                    this._activeRequests--;
                    console.log('GET Complete');
                    console.log('Active Requests = ' + this._activeRequests);
                }
                );
        })
        
        return deferredResult;
    }

    public Post(url: string, bodyObject) : Promise<T> {
        
        // convert our body object to string, as the downloaded expects it
        var bodyAsString : string = JSON.stringify(bodyObject);
        
        var deferredResult = new Promise((resolve, reject) => {
            this._activeRequests++;
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
                    this._activeRequests--;
                    console.log('POST Complete');
                    console.log('Active Requests = ' + this._activeRequests);
                }
                );
        })
        return deferredResult;
    }
    
    public Put(url: string, bodyObject) : Promise<T> {
        
        // convert our body object to string, as the downloaded expects it
        var bodyAsString : string = JSON.stringify(bodyObject);
        
        var deferredResult = new Promise((resolve, reject) => {
            this._activeRequests++;
            this._httpDownloader.put(this._baseUrl + url, bodyAsString)
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
                    this._activeRequests--;
                    console.log('PUT Complete');
                    console.log('Active Requests = ' + this._activeRequests);
                }
                );
        })
        return deferredResult;
        
    }
    
    public Delete(url: string) : Promise<T> {
        
        var deferredResult = new Promise((resolve, reject) => {
            this._activeRequests++;
            this._httpDownloader.delete(this._baseUrl + url)
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
                    this._activeRequests--;
                    console.log('DELETE Complete');
                    console.log('Active Requests = ' + this._activeRequests);
                }
                );
        })
        
        return deferredResult;
        
    }
    
}