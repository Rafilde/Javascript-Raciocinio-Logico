//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var x = parseInt(prompt("Informe uma quantidade de números limite para a gente perguntar:"));

var somain = 0
var somaout = 0
for (var y = 1; y <= x ; y = y + 1) { 
    var n = parseInt(prompt("Informe os números desejados")); 
    if (n < 10 || n > 20) { 
    var somain = somain + 1;
    } else {
    var somaout = somaout + 1; 
    }
}
console.log(somaout + " in");
console.log(somain + " out"); 