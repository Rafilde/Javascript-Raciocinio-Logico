//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var numerofuncionarios, horastrabalhadas, valorhoratrabalhada, salariofinal;
    numerofuncionarios = parseInt(prompt("Informe o número de funcionários:"));
    horastrabalhadas = parseInt(prompt("Informe o número de horas trabalhadas:"));
    valorhoratrabalhada = parseFloat(prompt("Informe o valor de cada hora trabalhada:"));
    salariofinal = (horastrabalhadas * valorhoratrabalhada).toFixed(2);
    console.log("NUMBER = " + numerofuncionarios); 
    console.log("SALARY = U$ " + salariofinal);