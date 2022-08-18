
function calculoRetiro () {
let nombre = prompt ("ingrese nombre");
let apellidopaterno = prompt ("ingrese apellido paterno");
let apellidomaterno = prompt ("ingrese apellido materno");
let edad = parseInt(prompt("ingrese edad"));
while (edad < 18) {
    alert(
        "edad menor a 18, trabajador debe ser mayor de edad"
    );
    edad = parseint(prompt("ingrese edad"));
}
let anosdeservicio = parseInt(prompt("ingrese años trabajados"));
let nombrecompleto = (`${nombre} ${apellidopaterno} ${apellidomaterno}`);
let anosrestantes = parseInt(30 - anosdeservicio);
let edadretiro = (edad + anosrestantes);
if (anosrestantes <5 ) {
    alert(
        "falta poco para el retiro felicidades"
    );
} else {
    alert(
        "aun falta para el retiro sigue trabajando"
    );
}
alert(`nombre empleado:${nombrecompleto} años por trabajar:${anosrestantes} edad de retiro:${edadretiro}`);
}
let repetirCalculo = "SI";
while (repetirCalculo == "SI") {
repetirCalculo = prompt("ingrese SI para repetir calculo");
calculoRetiro();
} 




