//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var raio, volume, pi;
    raio = prompt("Informe o Raio da esfera:");
    pi = 3.14159;
    volume = (4 / 3.0) * pi * raio ** 3;
    console.log("VOLUME = " + volume.toFixed(3))