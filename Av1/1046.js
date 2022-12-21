//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [horainicial, horafinal,] = prompt("Informe o valor da hora inicial e a hora final").split(" "); 
horainicial = parseInt(horainicial);
horafinal = parseInt(horafinal); 
if (horainicial > horafinal) { 
    console.log("O JOGO DUROU " + (24-(horainicial-horafinal)) + " HORA(S)"); 
} else if (horafinal > horainicial) { 
    console.log("O JOGO DUROU " + (horafinal - horainicial) + " HORA(S)"); 
} else { 
    console.log("O JOGO DUROU 24 HORA(S)");
}