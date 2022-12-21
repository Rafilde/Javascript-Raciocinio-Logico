//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
//var [] = prompt("Informe mais de um valor").split(" "); 
var x = parseInt(prompt("Informe um valor:")); 
var y = parseInt(prompt("Informe um segundo valor:")); 

if (x > y) { 
    for (y = y + 1;y < x ;y = y + 1) {
            if (y % 5 == 2) { 
                console.log(y);
            } else if (y % 5 == 3) { 
                console.log(y);
            }     
    }
} else { 
    for (x = x + 1 ;x < y ;x = x + 1) { 
        if (x % 5 == 2) { 
            console.log(x);
        } else if (x % 5 == 3) { 
            console.log(x);
        }
    }
}