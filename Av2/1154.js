//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var somaidade = 0
var ndepessoas = 0

for (var x = 1;;x = x + 1) { 
    var idade = parseInt(prompt("Informe sua idade:")); 
    if (idade >= 0) { 
        somaidade = somaidade + idade;
        ndepessoas = ndepessoas + 1;
    } else { 
        break;
    }
}
console.log((somaidade/ndepessoas).toFixed(2)); 