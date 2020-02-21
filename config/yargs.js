const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argvs = require('yargs') //cuando no lleva la / es porque nos referimos a un paequete.
    .command('listar', 'Imprime en consola la tabla de multiplicar segun el comando base',
        opts)
    .command('crear', 'Crea el archivo de multiplicar segun el comando base', opts)
    .help()
    .argv;


module.exports = {
    argvs //esporto la constante para que este accesible en otros archivos
}