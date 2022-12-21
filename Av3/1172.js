//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var X = [];
for(var i = 0; i < 10; i = i + 1) { 
    X[i] = parseInt(prompt("Digite um valor pra posição: " + i))
    if (X[i] > 0) { 
        console.log("X["+i+"] = "+X[i]);
    } else { 
        console.log("X["+i+"] = "+1);
    }  
}
