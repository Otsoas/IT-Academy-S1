//ejercicio 1
//creacion de las variables
let nombre = "Loli";
let apellido = "Lupiañez";

//imprimido en consola
function nombreCompleto(nombre, apellido) {
  console.log(`El nombre del usuario es ${nombre} y su apellido es ${apellido}`);
}
nombreCompleto(nombre, apellido);

//ejercicio 2
const mostrarNombre1 = (nombre, apellido) => {
  return `El nombre completo del usuario es ${nombre} ${apellido}`;
};
console.log(`${mostrarNombre1(nombre, apellido)}`);