//ejercicio 1
//creacion de las variables
let nombre = "Loli";
let apellido = "Lupiañez";

//imprimido en consola
console.log(`El nombre del usuario es ${nombre} y su apellido es ${apellido}`);

//ejercicio 2
//con Arrow Function, funcion expresada y SIN PARAMETROS
const mostrarNombre = () => {
  return `El nombre del usuario es Judit Serra`;
};
console.log(mostrarNombre());
//con Arrow Function y CON PARAMETRO
const mostrarNombre1 = (nombre) => {
  return `El nombre del usuario es ${nombre}`;
};
console.log(`${mostrarNombre1("Judit Serra")}`);

//con funcion declarada y SIN PARAMETROS
function imprimirNombre() {
  return `El nombre del usuario es Loli Lupiañez`;
};
console.log(`${imprimirNombre()}`);

//con funcion clasica y CON PARAMETRO
function imprimirNombre1(nombre) {
  return `El nombre del usuario es ${nombre}`;
};
console.log(imprimirNombre());