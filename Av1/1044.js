//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [A, B,] = prompt("Informe dois valores").split(" "); 
A = parseInt(A);
B = parseInt(B); 
if (B % A == 0) { 
    console.log("Sao Multiplos");
} else if ( A % B == 0) { 
    console.log("Sao Multiplos");
} else { 
    console.log("Nao sao Multiplos");
}