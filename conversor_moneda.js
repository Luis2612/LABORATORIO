const readline = require('readline');
const TASA_USD = 4000; 
const TASA_EUR = 4300; 

function convertirMoneda(monto, monedaDestino) {
    const destino = monedaDestino.toUpperCase().trim();
    if (destino === "USD") {
        return monto / TASA_USD;
    } else if (destino === "EUR") {
        return monto / TASA_EUR;
    }
    return null;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe el monto en COP: ', (montoInput) => {
    rl.question('Escribe la moneda destino (USD o EUR): ', (monedaInput) => {
        const monto = parseFloat(montoInput);
        const monedaDestino = monedaInput.trim();

        if (isNaN(monto) || monto <= 0) {
            console.log("Por favor, ingresa un monto válido.");
        } else {
            const resultado = convertirMoneda(monto, monedaDestino);
            if (resultado === null) {
                console.log("Moneda de destino no soportada. Solo se permite USD o EUR.");
            } else {
                console.log(`$${monto} COP equivalen a: ${resultado.toFixed(2)} ${monedaDestino.toUpperCase()}`);
            }
        }
        rl.close();
    });
});
