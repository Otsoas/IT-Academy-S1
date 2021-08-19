//ejercicio 1
//arrow funcion que genera un array con los valores del 0 al 9
//immprime 10 veces
function imprimeNumeros() {
  console.log('Imprimiendo 10 veces:')
  for (let i = 0; i <= 9; i++) {
    console.log(`${i} `)
  }
}
//las 10 veces se guardan en un array
const arrFuncion = []

for (let i = 0; i <= 9; i++) {
  arrFuncion[i] = imprimeNumeros
}
//se recorre array
arrFuncion.forEach(funcion => funcion())


//ejercicio 2
//anonima autoinvocable igualada a una variable
let nombre = ((nombreCompleto) => {
  //PRUEBA mostrar por consola
  console.log(`El usuario es ${nombreCompleto}`);
  //mostrado en consola con parametro e iguallado a variable MISMO RESULTADO anterior  
  //console.log(`El nombre es ${nombre}`);
})("Judit Serra");