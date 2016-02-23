System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function greeter(person) {
        return "Hello! How are you " + person.firstname + " " + person.lastname + "? It looks like you are " + person.age + " year(s) old!? ";
    }
    exports_1("greeter", greeter);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Greeter.js.map