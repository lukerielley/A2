import {Observable} from 'rxjs/Observable';

export interface IBaseRepo<T> {
    
    Get(url: string) : Observable<T>;
    Post(url: string, bodyObject) : Observable<T>;
    Put(url: string, bodyObject) : Observable<T>;
    Delete(url: string) : Observable<T>;
    
}