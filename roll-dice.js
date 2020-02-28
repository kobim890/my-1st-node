function rollDice (){
    return new Promise(function(res){
        setTimeout(function(){
            res(Math.ceil(Math.random()*6));
        }, 2000)
    });
}
module.exports = rollDice;