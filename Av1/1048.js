//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var salario = parseFloat(prompt("Informe aqui seu salário:")); 
if (salario >= 0 && salario <= 400.00) {
    var reajuste = 15;
    var reajusteganho = (salario*reajuste)/100; 
    var novosalario = salario + reajusteganho; 
    console.log("Novo salario: " + novosalario.toFixed(2)); 
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2)); 
    console.log("Em percentual: " + reajuste + " %");
} else if (salario >= 400.01 && salario <= 800.00) { 
    var reajuste = 12;
    var reajusteganho = (salario*reajuste)/100; 
    var novosalario = salario + reajusteganho; 
    console.log("Novo salario: " + novosalario.toFixed(2)); 
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2)); 
    console.log("Em percentual: " + reajuste + " %");
} else if (salario >= 800.01 && salario <= 1200.00) { 
    var reajuste = 10;
    var reajusteganho = (salario*reajuste)/100; 
    var novosalario = salario + reajusteganho; 
    console.log("Novo salario: " + novosalario.toFixed(2)); 
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2)); 
    console.log("Em percentual: " + reajuste + " %");
} else if (salario >= 1200.01 && salario <= 2000.00) { 
    var reajuste = 7;
    var reajusteganho = (salario*reajuste)/100; 
    var novosalario = salario + reajusteganho; 
    console.log("Novo salario: " + novosalario.toFixed(2)); 
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2)); 
    console.log("Em percentual: " + reajuste + " %");
} else if (salario > 2000.00) { 
    var reajuste = 4;
    var reajusteganho = (salario*reajuste)/100; 
    var novosalario = salario + reajusteganho; 
    console.log("Novo salario: " + novosalario.toFixed(2)); 
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2)); 
    console.log("Em percentual: " + reajuste + " %");
} 