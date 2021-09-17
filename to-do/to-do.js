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


const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }


}

const crear = (descripcion) => {

    cargarDB();

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