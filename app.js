// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        console.log('Actualiza una tarea');
        break;

    default:
        console.log('Comando no reconocido');
}