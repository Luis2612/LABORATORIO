const readline = require('readline');

function contarPalabras(texto) {
    const palabras = texto.split(" ").filter(palabra => palabra.trim() !== "");
    return palabras.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe un texto: ', (input) => {
    const totalPalabras = contarPalabras(input);
    console.log(`El texto contiene ${totalPalabras} palabras.`);
    rl.close();
});
