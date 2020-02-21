const colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El numero base [ ${base} ] no es un numero`)
        } else {
            for (let i = 1; i <= limite; i++)
                console.log(`${base}X${i} = ${base*i}`.bgRed);

            //resolve('Lista creada')
        }
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El numero base [ ${base} ] no es un numero`);
            return;
        }

        let datos = '';

        for (let a = 1; a <= limite; a++) {
            console.log(`Valor ${base} X ${a } = ${base*a}`);
            datos += `Valor ${base} X ${a } = ${base*a}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`Tablas_archivos/tabladel-${base}.txt `, datos, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabladel-${base}.txt`)

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}