//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var x = parseInt(prompt("Informe a quatidade de casos que deseja ter"));
    
for (var y = 1; y <= x ; y = y + 1) {
    var [A, B, C,] = prompt("Informe três valores").split(" "); 
        A = parseFloat(A);
        B = parseFloat(B); 
        C = parseFloat(C); 
            var mediapon = ((A * 2) + (B * 3) + (C * 5))/(2 + 3 + 5);
                console.log(mediapon.toFixed(1));
} 