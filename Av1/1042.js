//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [A, B, C,] = prompt("Informe três valores").split(" "); 
A = parseInt(A);
B = parseInt(B); 
C = parseInt(C); 
if (A > B && A > C && B > C) { 
    console.log(C); 
    console.log(B);
    console.log(A);
    console.log("");
    console.log(A);
    console.log(B);
    console.log(C);
} 
if (A > B && A > C && C > B) { 
    console.log(B);
    console.log(C);
    console.log(A);
    console.log("");
    console.log(A);
    console.log(B);
    console.log(C); 
} 
if (B > C && B > A && C > A) { 
    console.log(A);
    console.log(C);
    console.log(B);
    console.log("");
    console.log(A);
    console.log(B);
    console.log(C);
} 
if (B > A && B > C && A > C) { 
    console.log(C);
    console.log(A);
    console.log(B);
    console.log("");
    console.log(A);
    console.log(B);
    console.log(C);
} 
if (C > A && C > B && A > B) { 
    console.log(B);
    console.log(A);
    console.log(C);
    console.log("");
    console.log(A);
    console.log(B);
    console.log(C);
} 
if (C > B && C > A && B > A) { 
    console.log(A);
    console.log(B);
    console.log(C);
    console.log();
    console.log(A);
    console.log(B);
    console.log(C);
}