const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // convierte a JSON el arreglo

    // Grabarlo en el filesystem
    fs.writeFile('db/data.json', data, err => {

        if (err) throw new Error('No se pudo grabar la tarea: ', err);
        console.log('La tarea se grabo correctamente');
    });
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

module.exports = {
    crear
}