//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
for (var a = 1;;a = a + 1) { 
    var [X,Y,] = prompt("Digite o valor de X e Y:").split(" ");
        X = parseInt(X); 
        Y = parseInt(Y);
        if (X > 0 && Y > 0) { 
        console.log("primeiro");
    } else if (X < 0 && Y > 0) {
        console.log("segundo");
    } else if (X < 0 && Y < 0) { 
        console.log("terceiro");
    } else if (X > 0 && Y < 0) { 
        console.log("quarto");
    } else if (X == 0 && Y == 0) { 
        break;
    } else if (Y == 0) { 
        break;
    } else if (X == 0) { 
        break;
    }
}