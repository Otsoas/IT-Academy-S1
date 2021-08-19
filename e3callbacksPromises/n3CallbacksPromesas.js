let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
}, {
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

//
//
const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const usuarioFind = employees.find(numUsuario => numUsuario.id === id);
    if (usuarioFind) {
      resolve(usuarioFind)
      console.log(`El usuario ${employees[id - 1].id} existe`);

    } else {
      reject(`El usuario no existe`);
    };
  });
};

////////GET SALARIO
//Funcion que recibe como parametro el objeto empleado 
//el objeto es una desusctructuracion 
const getSalario = (employees) => {
  //retorna una promesa que
  //primero busca los salarios de los empleados 
  //segundo mira si existe ese empleado con un salario
  //tercero si existe deduelve resolve de la promesa que guarda el salario en una variable
  return new Promise((resolve, reject) => {
    if (employees != undefined) {
      const resultFind = salaries.find(salarioEmpleado => salarioEmpleado.id === employees.id)
      if (resultFind) {
        resolve(`El salario es de ${resultFind.salary} `)
      }
    } else {
      reject("Salario no existe")
    };
  });
};
///////LLAMADA A LAS PROMESAS ANIDADAs/////////////////
getEmpleado(4)
  .then(usuario => getSalario(usuario))
  .then(salario => console.log(salario))
  .catch(error => console.error(error));