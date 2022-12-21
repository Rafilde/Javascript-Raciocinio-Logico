//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var C = parseInt(prompt("Informe a posição da coluna"))
    var T = prompt("Informe S = soma ou M = média")
    var M = []; 
    var lin, col, soma, media;
    soma = 0;
    media = 0;
    for(lin = 0; lin < 3; lin++){ 
        M[lin] = []; 
        for(col = 0; col < 4;col++ ){
            M[lin][col] = parseFloat(prompt("Alimentar matriz"))
            if(col == C) { 
                console.log("Posição: " + C + " números: " + M[lin][col])//apague depois
                soma = soma + M[lin][col];
            }
        }
    }
    if(T == "S") { 
        console.log(soma.toFixed(1));
    }else{ 
        media = soma/12
        console.log(media.toFixed(1));
    }