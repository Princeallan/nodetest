let http = require('http');
let fileSystem = require('fs');

function onRequest(request, response) {
        response.writeHead(200,{'Content-Type': 'text/html'});
        fileSystem.readFile('./index.html', null, function (error, data) {
            if (error){
                response.writeHead(404);
                response.write('Page Not Found')
            } else {
                response.write(data);
            }
            response.end();
        });
}

http.createServer(onRequest).listen(8001);


//
// let http = require('http');
// let app = require('./app')
//
// http.createServer(app.handleRequest()).listen(8001);