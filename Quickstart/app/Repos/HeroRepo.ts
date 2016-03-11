import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {IBaseRepo} from '../interfaces/iBaseRepo';
import {BaseRepo} from '../Repos/BaseRepo';

import {IHero} from '../interfaces/ihero';

@Injectable()

export class HeroRepo<IHero> extends BaseRepo<IHero>
{
    constructor(
        http: Http
    )
    {
        
        // call the base class constructor
        super(http);

    }
    
    
    
}