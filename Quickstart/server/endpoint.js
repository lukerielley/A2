
var http = require('http');

const PORT = 8080; 

function handleRequest(request, response){
    
    console.log("handleRequest");
    
    response.setHeader('Content-Type', 'application/json');
    
    var heroes = [
        { 
            "id": 11, 
            "name": "Mr. Nice",
            "rate": 6.50,
        },
        { 
            "id": 12, 
            "name": "Narco",
            "rate": 7.50,
        },
        { 
            "id": 13, 
            "name": "Bombasto",
            "rate": 9.50,
        },
        { 
            "id": 14, 
            "name": "Celeritas",
            "rate": 19.50,
        },
        { 
            "id": 15, 
            "name": "Magneta",
            "rate": 13.50,
        },
        { 
            "id": 16, 
            "name": "RubberMan",
            "rate": 13.50,
        },
        { 
            "id": 17, 
            "name": "Dynama",
            "rate": 13.50,
        },
        { 
            "id": 18, 
            "name": "Dr IQ",
            "rate": 13.50,
        },
        { 
            "id": 19, 
            "name": "Magma",
            "rate": 13.50,
        },
        { 
            "id": 20, 
            "name": "Tornado",
            "rate": 13.50,
        }
    ];
    
    response.end(JSON.stringify(heroes));
    
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    
    console.log("Server listening on: http://localhost:%s", PORT);
    
});