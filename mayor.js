var num1 = parseInt(prompt('Ingrese el primer número:'));
var num2 = parseInt(prompt('Ingrese el segundo número:'));

if (num1 > num2) {
    alert('El número mayor es: ' + num1);
} else if (num2 > num1) {
    alert('El número mayor es: ' + num2);
} else {
    alert('Los números son iguales');
}
