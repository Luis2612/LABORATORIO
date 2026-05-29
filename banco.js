const readline = require('readline');

function retirarDinero(saldo, monto) {
    if (monto > saldo) {
        return "Fondos insuficientes";
    }
    return saldo - monto;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe tu saldo actual: ', (saldoInput) => {
    rl.question('Escribe el monto a retirar: ', (montoInput) => {
        const saldo = parseFloat(saldoInput);
        const monto = parseFloat(montoInput);

        if (isNaN(saldo) || isNaN(monto)) {
            console.log("Por favor, ingresa números válidos.");
        } else {
            const resultado = retirarDinero(saldo, monto);
            if (typeof resultado === "string") {
                console.log(resultado);
            } else {
                console.log(`Retiro exitoso. Tu nuevo saldo es: $${resultado}`);
            }
        }

        rl.close();
    });
});
