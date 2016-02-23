import {Component} from 'angular2/core';
import {greeter} from './Greeter'

var user = {
    firstname: "Chris", 
    lastname: "Fulstow",
    age: 38
};

@Component({
    selector: 'my-app',
    template: '<h1>My Third Angular 2 App</h1><h2>' + greeter(user) + '</h2>'
})
export class AppComponent { }