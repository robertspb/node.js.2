var readline = require('readline');
var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var logPath = './' + args.path + '.txt';
var random = Math.round(Math.random());

console.log('Try to guess if it\'s heads or tails!');
console.log(random);

rl.write('Please, make your choice!\n');

rl.on('line', function(cmd)
{
    if (random === parseInt(cmd))
    {
        console.log('"' + cmd + '"?');
        setTimeout(function (){
            console.log('YES! YOU WIN!!!')
        }, 3000);
        fs.appendFile(logPath, 'WIN\n', function(err) {
            if (err)
                throw err;
        });
    }
    else
    {
        console.log('"' + cmd + '"?');
        setTimeout(function (){
            console.log('NOPE! Try it again...')
        }, 3000);
        fs.appendFile(logPath, 'LOST\n', function(err) {
            if (err)
                throw err;
        });
    }

    this.close(); // закрываем обработчик
});