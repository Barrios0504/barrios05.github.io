function esPalindromo(cadena) {
    var reverse = cadena.split('').reverse().join('');
    return cadena === reverse;
}

var input = prompt('Ingrese una cadena:');
if (esPalindromo(input)) {
    alert('La cadena es un palíndromo');
} else {
    alert('La cadena no es un palíndromo');
}
