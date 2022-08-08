/* Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
 Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. Al finalizar muestra el resultados con alert() o console.log()
Script: calculadora para saber cuantos años faltan para retiro, mostrara nombre completo del trabajador, cuantos años de servicio quedan pendientes para el retiro y edad en la que se retirara si tiene que trabajar 30 años*/
let nombre = prompt ("ingrese nombre");
let apellidopaterno = prompt ("ingrese apellido paterno");
let apellidomaterno = prompt ("ingrese apellido materno");
const edad = parseInt(prompt("ingrese edad"));
const anosdeservicio = parseInt(prompt("ingrese años trabajados"));

let nombrecompleto = (`${nombre} ${apellidopaterno} ${apellidomaterno}`);
const anosrestantes = parseInt(30 - anosdeservicio);
const edadretiro = (edad + anosrestantes);
console.log("nombre completo empleado es ",nombrecompleto);
console.log("años de servicio restantes",anosrestantes);
console.log("edad de retiro",edadretiro);
alert(`nombre empleado:${nombrecompleto} años por trabajar:${anosrestantes} edad de retiro:${edadretiro}`)