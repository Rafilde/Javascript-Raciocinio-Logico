//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [X,Y,] = prompt("Digite o valor de X e Y:").split(" ");
X = parseFloat(X); 
Y = parseFloat(Y);
if (X > 0 && Y > 0) { 
    console.log("Q1");
} else if (X < 0 && Y > 0) {
    console.log("Q2");
} else if (X < 0 && Y < 0) { 
    console.log("Q3");
} else if (X > 0 && Y < 0) { 
    console.log("Q4");
} else if (X == 0 && Y == 0) { 
    console.log("Origem");
} else if (Y == 0) { 
    console.log("Eixo X");
} else if (X == 0) { 
    console.log("Eixo Y");
}