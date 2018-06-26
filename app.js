let url = require ('url');
let filesystem = require('fs');

function renderPage(path, response) {
    fileSystem.readFile(path, null, function (error, data) {
        if (error){
            response.writeHead(404);
            response.write('Page Not Found')
        } else {
            response.write(data);
        }
        response.end();
    });
}

var module;
module.exports = {
    handleRequest : function (respect, response) {
        response.writeHead(200, {'Content-type': 'text/html'});

        let path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderPage('./index.html',response);
                break;
            case '/contact':
                renderPage('./contact.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Page not found');
                response.end();
        }

    }
};
