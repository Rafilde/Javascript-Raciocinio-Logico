//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var V = parseInt(prompt("Informe um valor menor e igual a 50:"))

//se o número for maior que 50 ele vai ficar pedindo pra tu digitar o valor certo    
for(var soma = 0;V > 50 ;soma = soma + 1) { 
            V = parseInt(prompt("Informe um valor menor ou igual a 50:"));
        }

//números menor igual a 50 
if(V <= 50){ 
    var N = []; 
    N[0] = V
    console.log("N[0] + " + N[0]); 

    for(var i = 1; i < 10; i = i + 1) { 
        var resultado = 2 * N[0]
        N.push(resultado)
        console.log("N[" + i + "] = " + resultado); 
        N[0] = resultado;
    }
}