import {IPerson} from './Interfaces/IPerson'

export function greeter(person : IPerson) {
    
    return `Hello! How are you ${person.firstname} ${person.lastname}? It looks like you are ${person.age} year(s) old!? `; 
     
}