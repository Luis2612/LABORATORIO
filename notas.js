const readline = require('readline');

function calcularPromedio(notas) {
    if (notas.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    const promedio = suma / notas.length;

    return parseFloat(promedio.toFixed(2));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe tus notas separadas por comas (ej: 8, 9.5, 7.2, 10): ', (input) => {

    const notasArray = input.split(',').map(nota => parseFloat(nota.trim()));

    const notasValidas = notasArray.filter(nota => !isNaN(nota));

    const promedioFinal = calcularPromedio(notasValidas);

    console.log(`El promedio de tus notas es: ${promedioFinal}`);

    rl.close();
});
