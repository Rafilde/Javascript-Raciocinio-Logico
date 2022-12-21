//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var valor = parseInt(prompt("Informe um valor:")); 
    if (valor % 2 !== 0) { 
        for (var cont = 0; cont < 12 ; cont = cont + 2) { 
            console.log(valor + cont);               
    } 
} else { 
    transformaparemimpa = valor + 1
    for (var cont = 0; cont < 12 ; cont = cont + 2) { 
            console.log(transformaparemimpa + cont);
}
}