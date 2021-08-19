//nivel 2 ejercicio 1
let mascotas = [{
  id: 1,
  nombre: 'Omega'
}, {
  id: 2,
  nombre: 'Brinco'
}];

const mascota = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mascotaFind = mascotas.find(numMascota => numMascota.id === id);
      if (mascotaFind) {
        resolve(mascotaFind)
        return mascotaFind
      } else {
        reject(`La mascota no existe`);
      };
    }, 2000);
  });
};

async function asincronaMascotas(id) {
  try {
    const mascotaNombre = await mascota(id);
    console.log(`la mascota ${mascotaNombre.id} se llama ${mascotaNombre.nombre}, `);
  } catch (error) {
    console.error(error);
  };
};

asincronaMascotas(1);

//nivel 3 ejercicio 1
asincronaMascotas(4);
asincronaMascotas();
asincronaMascotas('');
asincronaMascotas(0);
asincronaMascotas(11);
asincronaMascotas('canela');