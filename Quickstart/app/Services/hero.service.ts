
import {Injectable} from 'angular2/core';
import {IHero} from '../interfaces/ihero';
import {HEROES} from '../mocks/mock-heroes';

@Injectable()

export class HeroService {

    getHeroes() {
        
        // get our heros
        return Promise.resolve(HEROES);

    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

}
