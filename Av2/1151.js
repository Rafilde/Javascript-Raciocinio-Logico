//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var a, b, c, n, cont;
n = parseInt(prompt("Informe a quantidade de termos desejada da série de Fibonacci:"));
a = 0;
b = 1;
cont = 2;
if (n < 2){
	console.log(a);
} else {
	console.log(a, b);
	while (cont < n){
		c = a + b;
		console.log(c);
		a = b;
		b = c;
		cont++;
	}
}