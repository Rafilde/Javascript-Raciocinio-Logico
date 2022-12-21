//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var al = 0; 
var gas = 0; 
var di = 0;

for (var x = 0;;x = x + 1) {
    var tipo = parseInt(prompt("Informe seu tipo de combustível:")); 

        for (tipo; tipo !== 1 && tipo !== 2 && tipo !== 3 && tipo !== 4;) { 
            tipo = parseInt(prompt("Código inválido! solicite um novo código:"));
        }

        if (tipo == 1) { 
            al = al + 1
        } else if (tipo == 2) { 
            gas = gas + 1
        } else if (tipo == 3) { 
            di = di + 1
        } else if (tipo == 4) { 
            break;
        }
}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + al); 
console.log("Gasolina: " + gas);
console.log("Diesel: " + di);