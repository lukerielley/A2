import {Pipe, PipeTransform} from 'angular2/core';

// Declare the name of our pipe
@Pipe(
    {
        name: 'heroratepipe'
    }
)

export class HeroRatePipe implements PipeTransform {
    
    transform(value: number, args: string[]): any {
        
        return Math.pow(value, parseInt(args[0] || '1', 10));
        
    }
}