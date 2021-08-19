const fs = require(`fs`);
const zlib = require('zlib');
const {
  exec
} = require('child_process');
const crypto = require('crypto');

//? /////level 1 exercise 1///////////////////////////
//function recursive
function repetirMensaje() {
  setInterval(() => {
    console.log(`Mensaje recursivo`)
  }, 1000);
};
repetirMensaje()


//? /////level 1 exercise 2///////////////////////////
function crearArchivo() {
  fs.writeFile(`prueba.txt`, `Prueba.txt`, function (error, ) {
    if (error) {
      console.log(error);
    }
    console.log(`Sprint 1 Node Utils nivel 1 ejercicio 2`);
    console.log(`Archivo creado`);
  });
};
crearArchivo()

//? /////level 1 exercise 3///////////////////////////
function leerArchivo() {
  fs.readFile(`prueba.txt`, (error, texto) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Sprint 1 Node Utils nivel 1 ejercicio 3`);
      //.toString para ver el texto
      console.log(texto.toString());
    };
  });
};
leerArchivo();

//? /////level 2 exercise 1a///////////////////////////
function comprimirArchivo() {
  const gzip = zlib.createGzip();
  const archivoAComprimir = fs.createReadStream('prueba.txt');
  const archivoComprimido = fs.createWriteStream('prueba.txt.gz');
  console.log(`Sprint 1 Node Utils nivel 2 ejercicio 1a`);
  console.log(`Archivo comprimido`);
  archivoAComprimir.pipe(gzip).pipe(archivoComprimido);
};
comprimirArchivo();

//? /////level 2 exercise 1b///////////////////////////
// function mostrarDirectorio() {
//   exec('ls -a', (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     };
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     };
//     console.log(`Sprint 1 Node Utils nivel 2 ejercicio 1b`);
//     console.log(`stdout: ${stdout}`);
//   });
// };
//mostrarDirectorio();

//? /////level 3 exercise 1a///////////////////////////
// function codificacionHex() {
//   const archivoACodificar = Buffer.from('pruebaTexto.txt', 'utf8');
//   // fs.writeFile(`prueba.txt`, `Esto es una prueba.txt`, `hex`, function (error, ) {
//   //   if (error) {
//   //     console.log(error);
//   //   };
//   // });
//   console.log(`Sprint 1 Node Utils nivel 3 ejercicio 1a hex `);
//   console.log(archivoACodificar.toString('hex'));
// };
// ///////////////////////////////////////////////
// //const fs = require(`fs`);
// function codificacionBase() {
//   const archivoACodificar = Buffer.from('pruebaTexto.txt', 'utf8');
//   // fs.writeFile(`prueba1.txt`, `Segunda prueba.txt`, `base64`, function (error, ) {
//   //   if (error) {
//   //     console.log(error);
//   //   };
//   // });
//   console.log(`Sprint 1 Node Utils nivel 3 ejercicio 1a base`);
//   console.log(archivoACodificar.toString('base64'));

// };

//codificacionHex();
//codificacionBase();

//? /////level 3 exercise 1b and c///////////////////////////
// let archivoACifrar = 'pruebaTexto.txt';
// const key = crypto.randomBytes(24);
// const iv = crypto.randomBytes(16);

// //cifrar
// function encriptar() {
//   let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
//   let encrypted = cipher.update(archivoACifrar, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//   console.log(`Sprint 1 Node Utils nivel 3 ejercicio 1b y c`);
//   console.log('encriptado: ' + encrypted);
//   return encrypted;
// };
// //const archivoEncriptado = encriptar();

// //Desencriptar
// function desencriptar(encrypted) {
//   let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
//   let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
//   decrypted += decipher.final('utf-8');

//   console.log('desencriptado: ' + decrypted)
// };
//desencriptar(archivoEncriptado);

// module.exports = {
//   repetirMensaje,
//   crearArchivo,
//   leerArchivo,
//   comprimirArchivo,
//   mostrarDirectorio,
//   codificacionHex,
//   codificacionBase,
//   encriptar,
//   desencriptar,
// }