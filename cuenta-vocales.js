var frase = prompt('Ingrese una frase:');
var cuenta = 0;

for (var i = 0; i < frase.length; i++) {
    var letra = frase.charAt(i).toLowerCase();
    if ('aeiou'.includes(letra)) {
        cuenta++;
    }
}

alert('La cantidad de vocales en la frase es: ' + cuenta);
