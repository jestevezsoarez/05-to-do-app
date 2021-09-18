const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========Por Hacer========='.green);
            console.log(tarea.descripcion);
            let estado = tarea.completado ? 'Finalizada' : 'Pendiente';
            console.log('Estado: ', estado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado)
            console.log(`Tarea ${argv.descripcion} actualizada correctamente`);
        else
            console.log('No se pudo actualizar la tarea: ', argv.descripcion);
        break;


    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado)
            console.log(`Tarea ${argv.descripcion} borrada correctamente`);
        else
            console.log('No se pudo borrar la tarea: ', argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
}