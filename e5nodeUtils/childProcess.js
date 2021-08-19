const child_process = require('child_process');

//usamos metodo spawn, e indicamos comando de utilidad a utilizar y ruta en este caso
let comando = child_process.spawn('cmd', ['/c', 'dir C:\\Users\n']);

//Especificamos la visualizacion de los datos 
comando.stdout.on('data', function (datos) {
  //console.log('Salida:');
  console.log(datos.toString());
});
// Si surge algun error
comando.stderr.on('data', function (datos) {
  console.log('Error: ', datos.toString());
})
//al finalizar el evento ejecutamos evento exit
comando.on('exit', function (codigo) {
  console.log('El proceso ha finalizado con el código:', codigo);
});