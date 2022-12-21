//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var soma = 0; 
var med = 0; 

for (var x = 1;; x = x + 1) { 
    var nota = parseFloat(prompt("Informe sua nota:")); 
        if (nota >= 0 && nota <= 10) { 
            med = med + nota; 
            soma = soma + 1
            if (soma == 2) { 
                console.log("media = " + (med/2).toFixed(2)); 
                break;
}
        } else { 
            console.log("nota invalida");
        }
}