//O beecrowd sempre deve ser essas informações iniciais.
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
//var prompt = function (texto) {return lines.shift();}; 
var [A, B, C,] = prompt("Informe três valores").split(" "); 
    A = parseFloat(A);
    B = parseFloat(B); 
    C = parseFloat(C);
    
    if (A >= B && A >= C && B >= C) { 
    var X = A;
    var Y = B;
    var Z = C;   
    } else if (A >= B && A >= C && C >= B) { 
        var X = A; 
        var Y = C; 
        var Z = B;
        } else if (B >= A && B >= C && A >= C ) { 
            var X = B; 
            var Y = A; 
            var Z = C;
            }  else if (B >= A && B >= C && C >= A) { 
                var X = B; 
                var Y = C; 
                var Z = A;
                } else if (C >= A && C >= B && A >= B) { 
                    var X = C; 
                    var Y = A; 
                    var Z = B;
                    } else if (C >= A && C >= B && B >= A) { 
                        var X = C; 
                        var Y = B; 
                        var Z = A;
                        }
    if (X >= Y + Z) { 
        console.log("NAO FORMA TRIANGULO");      
    } else {
        if (X**2 == Y**2 + Z**2) { 
            console.log("TRIANGULO RETANGULO");
                if (X==Y && Y==Z && X==Z) { 
                    console.log("TRIANGULO EQUILATERO");
                } else if (X==Y || Y==Z || X==Z) { 
                    console.log("TRIANGULO ISOSCELES");
                } 
        } 
        if (X**2 > Y**2 + Z**2) { 
            console.log("TRIANGULO OBTUSANGULO");
                if (X==Y && Y==Z && X==Z) { 
                    console.log("TRIANGULO EQUILATERO");
                } else if (X==Y || Y==Z || X==Z) { 
                    console.log("TRIANGULO ISOSCELES");
                } 
        } 
        if (X**2 < Y**2 + Z**2) { 
            console.log("TRIANGULO ACUTANGULO");
                if (X==Y && Y==Z && X==Z) { 
                    console.log("TRIANGULO EQUILATERO");
                } else if (X==Y || Y==Z || X==Z) { 
                    console.log("TRIANGULO ISOSCELES");
                } 
        }
        }