//Ejercicio 1
//Creamos un objeto
const animales = {
  tipo: "Perro",
  nombre: "Ayu",
  edad: 9
};
//creacion de la funcion flecha 
((animales) => {

  console.log(animales);

})(animales);

////////////////////////////////////////////////////////////
//Ejercicio 2
//Creacion de la clase Persona
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  };
  //metodos de la clase Persona
  //muesta en consola el nombre
  decirNombre() {
    return console.log(`El nombre es ${this._nombre}`);
  };
};
//creacion de una nueva persona
let personaUsuaria = new Persona("Paula");
//llamamos al metodo de la clase
personaUsuaria.decirNombre();