//ejercicio  1
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

//Extraemos el id de los empleados a traves de una promesa
const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find(numUsuario => numUsuario.id === id)
    if (employee) {
      resolve(`El usuario ${employee.id} existe. Y su nombre es ${employee.name}`);
    } else {
      reject(`El usuario no existe`);
    }
  });
};

//llamamos a la funcion de empleado
getEmpleado(1)
  .then(result => console.log(result))
  .catch(error => console.error(error))

// ejercicio 2 
//Funcion que recibe como parametro el objeto empleado 
//el objeto es una desusctructuracion 
const getSalarioA = (
  employee
) => {
  //retorna una promesa que
  //primero busca los salarios de los empleados 
  //segundo mira si existe ese empleado con un salario
  //tercero si existe deduelve resolve de la promesa que guarda el salario en una variable
  return new Promise((resolve, reject) => {
    if (employee != undefined) {
      const resultdelfind = salaries.find(salarioEmpleado => salarioEmpleado.id === employee.id)
      if (resultdelfind) {
        resolve(`El salario es de ${resultdelfind.salary} `)
      }
    } else {
      reject("Salario no existe")
    }
  });
};
//llamamos a la funcion y le pasamos como parametro el objeto de un empleado
getSalarioA(
    employees[0]
  )
  .then(salario => console.log(salario))
  .catch(error => console.error(error));

//ejercicio 3
///Funcion de la promesa empleado 
const getEmpleado1 = (id) => {
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
const getSalario1 = (employees) => {
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
getEmpleado1(2)
  .then(usuario => getSalario1(usuario))
  .then(salario => console.log(salario))
  .catch(error => console.error(error));