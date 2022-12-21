//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var n = parseInt(prompt("Informe um valor:")); 
    for (var x = 1; x <= 10000; x = x + 1) { 
        if (x % n == 2) { 
            console.log(x); 
        }
    }