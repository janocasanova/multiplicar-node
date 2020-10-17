const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);

        });

    })
}

module.exports = {
    crearArchivo,
    listar
}