var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));

var logPath = './' + args.path + '.txt';

fs.readFile(logPath, function (err, data) {
    if (err)
        throw err;

    var results = data.toString();
    var results_array = results.split('\n');
    var wins = 0;
    var loses = 0;

    console.log('logs:' + '\n' + results_array);

    for (var i=0; i<=results_array.length; i++)
    {
        if (results_array[i] === 'WIN')
        {
            wins++;
        }
        else if (results_array[i] === 'LOST')
        {
            loses++;
        }
    }
    
    console.log('total wins: ' + wins + '\n' + 'total loses: ' + loses);
});
