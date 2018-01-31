var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
        	if (err) throw err;
        	response.write(data);
            response.end();
        });
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
 			response.write('<img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg" alt="404 error">'); 			
 			response.end();
    }
});

server.listen(9000);