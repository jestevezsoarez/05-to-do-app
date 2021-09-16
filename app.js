const argv = require('yargs').argv;
console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear to do');
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