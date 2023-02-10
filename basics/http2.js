const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/styles.css');
const homeImage = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;

    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About page</h1>');
        res.end();
    } else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    } else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5000);