//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var N = []; 
for(var t = 0; t < 20; t = t + 1) { 
    N[t] = parseInt(prompt("Informe um valor para cada posição: " + t)); 
}
var d = N.length - 1;
for(var p = 0; p < (20/2); p = p + 1){ 
    console.log("N["+ p +"] = " + N[d]);
    d--;
}
var x = (N.length/2)-1;
for(var i = (20/2); i < 20; i = i + 1) { 
    console.log("N["+ i +"] = " + N[x]);
    x--
}