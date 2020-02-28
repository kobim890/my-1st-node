const http = require('http');
const rollDice = require('./roll-dice');
const fs = require('fs');
const url = require('url');
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (request.url.includes('/write')) {
        const username = url.parse(request.url, true).query.username;
        fs.writeFile('./users.txt', username, (err) => { // how to write in a folder
            if (err) {
                console.log(err);
                return;
            }
            response.end();
        });
    }
    if (request.url === '/read') {
        fs.readFile('./users.txt', 'utf-8', (err, content) => {
            response.write(content);
            response.end();
        });
    }
    if(request.url === '/delete'){
        fs.writeFile('users.txt', '', function(){
            console.log('done')
        });
        response.end();
    }
    if(request.url === '/roll'){
        rollDice()
            .then((result) => {
                if(result === 4) {
                    console.log(result +' You won');
                    response.end(result +' You won')
                } else {
                    console.log(result + ' You lose')
                    response.end(result + ' You lose')
                }
            });
    }
}).listen(4000);
console.log('Listening on: http://localhost:4000');