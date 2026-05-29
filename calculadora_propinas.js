const readline = require('readline');

function calcularPropina(total, porcentaje) {
    const propina = total * (porcentaje / 100);
    return total + propina;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe el total de la cuenta: ', (totalInput) => {
    rl.question('Escribe el porcentaje de propina: ', (porcentajeInput) => {
        const total = parseFloat(totalInput);
        const porcentaje = parseFloat(porcentajeInput);
        
        const totalAPagar = calcularPropina(total, porcentaje);
        
        console.log(`El total a pagar (cuenta + propina) es: $${totalAPagar}`);
        
        rl.close();
    });
});
