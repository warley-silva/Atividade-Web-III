const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');

while (true) {
    let resp = prompt('Digite um nome ou "FIM" para encerrar o programa: ');
    if(resp.toLocaleUpperCase() != 'FIM') {
        fs.appendFile('Nomes.txt', '\n'+resp, (err) => {
            if(err) throw err;
        });
    } else {
        break;
    }
}

console.log('Dados armazenos no arquivo "Nomes.txt".');