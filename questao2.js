const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');
const path = require('path');
const { createGzip } = require('zlib');

let pasta = prompt("Digite o endereço da pasta com: ");
let arquivo = prompt("Digite o nome do arquivo: ")

let pastaArquivo = pasta + "\\" + arquivo;

const compactar = (endereco) => {
    const stream = fs.createReadStream(endereco);
    stream
        .pipe(createGzip())
        .pipe(fs.createWriteStream(`${endereco}`))
        .on("finish", () => 
            console.log('Arquivo compactado com sucesso.')
        );
};

compactar(pastaArquivo);