const readline = require('readline');

const listaUsuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 17 },
    { nombre: "María", edad: 18 },
    { nombre: "Juan", edad: 30 },
    { nombre: "Sofía", edad: 15 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    const filtrados = [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= edadMinima) {
            filtrados.push(usuarios[i]);
        }
    }
    return filtrados;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe la edad mínima para filtrar usuarios: ', (input) => {
    const edadMinima = parseInt(input);

    if (isNaN(edadMinima)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        const resultado = filtrarUsuarios(listaUsuarios, edadMinima);
        console.log(`Usuarios que tienen ${edadMinima} años o más:`);
        
        if (resultado.length === 0) {
            console.log("Ningún usuario cumple con este criterio.");
        } else {
            for (let i = 0; i < resultado.length; i++) {
                console.log(`- ${resultado[i].nombre} (${resultado[i].edad} años)`);
            }
        }
    }
    
    rl.close();
});
