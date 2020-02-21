const argv = require('./config/yargs').argvs; //solo se importa la variable argv expuesta
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log('Listado creado'))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.yellow(archivo.bgRed)}`))
            .catch(e => console.log(e, colors.bgRed));
        break;
    default:
        console.log('Comando no reconocido.');
}

console.log(argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]