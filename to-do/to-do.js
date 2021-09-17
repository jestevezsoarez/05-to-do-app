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

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion; // si no encuentra la tarea devuelve -1 y sino devuelve la posicion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true; // para decir que la tarea se hizo correctamente
    } else {
        return false;
    }
}


const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}