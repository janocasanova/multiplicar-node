const { argv } = require('./config/yargs');
var colors = require('colors/safe');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.limite, argv.base);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}
//console.log(argv);

//let base = 'abc';

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];