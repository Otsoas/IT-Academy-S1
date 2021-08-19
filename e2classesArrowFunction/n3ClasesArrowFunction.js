//* //////Creacion del Objeto con Funcion creadora de un objeto
//Funcion creadora de un objeto
// Clase abstracta
function Animal() {
  this.nombre = 'nombre'
  this.raza = 'raza'
  this.sonido = 'sonido';
  if (this.constructor === Animal) {
    throw new Error(`Imposible crear instancia de una clase abstracta`);
  }
};
//Metodo Abstacto
Animal.prototype.definicionCompleta = function () {
  return `Me llamo ${this.nombre}, soy una ${this.raza} y digo ${this.sonido}`;
}

function Perro(nombre, raza, sonido) {
  this.nombre = nombre
  this.raza = raza
  this.sonido = sonido;
}

//Herencia
Perro.prototype = Object.create(Animal.prototype);
//imprimidos metodo y pasamos parametros
var perro = new Perro('Omega', 'felina', 'guau');
console.log(perro.definicionCompleta());


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// function Persona(nombre, apellido, edad, hobby) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.hobby = hobby;
// };
// //creacion objeto
// let objPersona = new Persona("Judit", "Serra", 27, "leer")
// console.log(objPersona);
// // //CONTROL
// //console.log(typeof objPersona);
// //mostramos en consola
// console.log(`Los datos de la nueva persona son: ${objPersona.nombre} ${objPersona.apellido}. Tiene la edad de ${objPersona.edad} años. Tiene el hobby de ${objPersona.hobby}`);

////////////////////////////////////////////////
// //* //Creacion del Objeto con la clase Objeto de js////////
// //Creacion con la clase Objeto de js
// var animal = new Object();
// animal.tipo = "gato";
// animal.nombre = "Ayu";
// animal.edad = 5;
// //PRUEBA
// console.log(animal);
// //console.log(typeof animal);
// //mostramos por consola
// console.log(`Los datos del animal son: ${animal.tipo} ${animal.nombre}. Tiene la edad de ${animal.edad} años.`);