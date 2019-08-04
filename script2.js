array = prompt("digite uma sequencia de numeros positivos separados por virgula");
array = array.split(",");
document.writeln("Numeros no Vetor: " + array + "<br>");


for (var i = 0; i < array.length; i++) {
    var potencia = array.map(function(num){
        return Math.pow (num, i++)
    });
}

var total = potencia.reduce(function(total, potencia){
    return total + potencia
}, 0);
document.writeln("<br> Potência dos numeros em relação ao indice: " + potencia);
document.writeln("<br> Numeros Somados: " + total);



















// numeros = [5,3,7,];
// expoente = [];


// for (i = 0; numeros.length; i++){
//     numeros[i] *= 2;
//     document.write(numeros);
// }

// var numbers = [5, 5];
// array = [];

// for (var i = 0; i < numbers.length; i++) {
//     array = Math.pow([i], numbers[i]);
// }
// document.writeln( array + "<br>");
// document.writeln(numbers + "<br>");
