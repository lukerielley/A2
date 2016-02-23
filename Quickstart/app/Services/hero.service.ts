
import {Injectable} from 'angular2/core';
import {HEROES} from '../mocks/mock-heroes';

@Injectable()

export class HeroService {

    getHeroes() {
        
        // get our heros
        return HEROES;
        
    }

}
