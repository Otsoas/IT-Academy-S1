//ejercicio 1
//Hecho con funcion flecha y operador ternario
///////NO SE SI SE PODRIA CON LOS PARAMETROS///////////
function mostrarResultado1(num1, num2) {
  return new Promise((resolve, reject) => {
    //operador ternario evalua si la expresion es verdadera o falsa 
    //lo verdadero va detrad del ?
    //lo falso detras de :
    (num1 + num2) > 7 ?
      resolve(num1 + num2) :
      reject(new Error(`El resultado es mayor del esperado`));
  });
};
mostrarResultado1(7, 2)
  .then(result => console.log(`El resultado es de ${result}`))
  .catch(error => console.error(error));


//ejercicio 2
//Creamos la funcion  que recibira un parammetro y callbacks
//segun el resulltado del condicional dará un resultado u otro
const getPar = (num, callbacks) => {
  //variable que recoge si un numero es par o no  
  //condicional que entrara en un condicional u otro segun si es par o no
  if (!((num % 2) === 0)) callbacks(`El número ${num} no es par`)
  else callbacks(`El número ${num} es par`);
};
//llamamos a la funcion y mostrara por consola si es par o no
getPar(7, (resultPar) => {
  console.log(resultPar);
});