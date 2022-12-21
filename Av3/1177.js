//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var T = parseInt(prompt("Informe um valor:")); 
var crescente = 0;
for(var i = 0; i < 1000; i++){ 

    if(crescente < T) {
        console.log("N["+i+"] = " + crescente)
        crescente = crescente + 1
    } else { 
        crescente = 0; //aqui o crescente vira 0 novamente
        console.log("N["+i+"] = " + crescente)
        crescente = crescente + 1//se tu tirar isso da pra entender
    }
}