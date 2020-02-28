const rollDice = require('./roll-dice');

const fs = require('fs');

fs.writeFile('./users.txt', 'content', function(err){
    if (err){
        console.log(err);
        return;
    }
    console.log('written')

});

fs.readFile('./users.txt', 'utf-8', function(err,  content){
});
//rollDice().then(num=>console.log(num));

