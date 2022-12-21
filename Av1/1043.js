//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [A, B, C,] = prompt("Informe três valores").split(" "); 
A = parseFloat(A);
B = parseFloat(B); 
C = parseFloat(C); 
var perimetro, area; 
perimetro = A + B + C; 
area = (((A + B)*C)/2); 
if (A < B + C && C < A + B && B < C + A) { 
    console.log("Perimetro = " + perimetro.toFixed(1));
} else { 
    console.log("Area = " + area.toFixed(1));
}