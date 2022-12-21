//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var A = [];
for(var i = 0; i < 100; i++){
    A[i] = parseFloat(prompt("Informe um número:")); 

    if(A[i] <= 10){
        console.log("A[" + i + "] = " + A[i].toFixed(1)); 
    }
}