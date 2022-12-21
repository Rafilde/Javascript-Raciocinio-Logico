//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var rato = 0;
var sapo = 0; 
var coelho = 0; 
var contador = 0;

 var nexp = parseInt(prompt("Informe o número de experimentos que foram realizados:")); 

for (var cont = 0;cont < nexp;cont = cont + 1) {  
    var [quant, tipo] = prompt("Informe a quatidade de experimentos e o tipo de cobaia (use: C, R ou S):").split(" ");
    quant = parseInt(quant); 

    contador = contador + quant;

    if (tipo == "R") { 
        rato = rato + quant;
    } else if (tipo == "S") { 
        sapo = sapo + quant; 
    } else if (tipo == "C") { 
        coelho = coelho + quant; 
    }
}

var percentualC = (coelho/contador)*100; 
var percentualR = (rato/contador)*100;
var percentualS = (sapo/contador)*100;

console.log("Total: " + contador + " cobaias"); 
console.log("Total de coelhos: " + coelho); 
console.log("Total de ratos: " + rato); 
console.log("Total de sapos: " + sapo); 
console.log("Percentual de coelhos: " + percentualC.toFixed(2) + " %"); 
console.log("Percentual de ratos: " + percentualR.toFixed(2) + " %"); 
console.log("Percentual de sapos: " + percentualS.toFixed(2) + " %");