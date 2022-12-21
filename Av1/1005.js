//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var A, B, m
A = parseFloat(prompt("Informe a primeira nota do aluno:")); 
B = parseFloat(prompt("Informe a segunda nota do aluno:"));
m = ((A*3.5 + 7.5*B)/11); 
console.log("MEDIA = " + m.toFixed(5));
