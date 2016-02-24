System.register(['angular2/core', './hero-detail.component', '../services/hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var HeroesComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    //alert('You have selected the hero "' + hero.name + '"');
                    this.selectedHero = hero;
                };
                ;
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        // The components we want to make use of
                        directives: [
                            hero_detail_component_1.HeroDetailComponent
                        ],
                        // our DI declarations
                        // providers: [HeroService], THIS IS REMOVED FROM HERE, AS IT IS NOW DECLARED HIGHER IN APP.COMPONENT
                        templateUrl: './app/templates/heroes.component.html',
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 10em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
            // contains our list of heros
            HEROES = [];
        }
    }
});
//# sourceMappingURL=heroes.component.js.map