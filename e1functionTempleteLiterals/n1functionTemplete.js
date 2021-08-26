//NIVEL 1
//funcion que imprime el nombre
//con funcion clasica
function imprimirNombre(nombre) {
  console.log(`El nombre del usuario es ${nombre}`);
};
imprimirNombre(`Loli`);

//Otra forma con arrow function
//sin parentesis en parametro y sin llaves en ejecucion
//por tener solo u parametro y ocupar una linea la ejecucion
const mostrarNombre = nombre => console.log(`El nombre del usuario es ${nombre}`);
mostrarNombre(`Judit`);