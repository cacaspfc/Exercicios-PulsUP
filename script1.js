numeros = prompt("digite uma sequencia de numeros positivas ou negativas separas por virgula");
numeros = numeros.split(",");
document.writeln("Numeros no Vetor: " + numeros)

var par = [];
var impar = [];
for (i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        par.push(numeros[i]);
        
    }
    else {
        impar.push(numeros[i]);
    }
}
document.writeln ("<br> Pares Ordenados: " + par.sort(function(a, b){return a-b}));
document.writeln("<br> Impares Ordenados: " + impar.sort(function(a, b){return a-b}));


for (var i = 0; i < array.length; i++) {
    var total = array.map(function(num){
        return Math.pow (num, [i])
    });
}

document.write(total)