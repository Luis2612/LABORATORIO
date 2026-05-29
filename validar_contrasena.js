function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return false;
    }

    let tieneNumero = false;
    let tieneMayuscula = false;

    for (let i = 0; i < contraseña.length; i++) {
        const caracter = contraseña[i];

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }

        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }
    }

    return tieneNumero && tieneMayuscula;
}

console.log("Prueba 1: 'abc' (muy corta)");
console.log("Resultado:", validarContraseña("abc"));

console.log("\nPrueba 2: 'abcdefgh' (larga pero sin número ni mayúscula)");
console.log("Resultado:", validarContraseña("abcdefgh")); 

console.log("\nPrueba 3: 'abcdefg1' (larga y con número, pero sin mayúscula)");
console.log("Resultado:", validarContraseña("abcdefg1")); 

console.log("\nPrueba 4: 'abcdefgA' (larga y con mayúscula, pero sin número)");
console.log("Resultado:", validarContraseña("abcdefgA")); 

console.log("\nPrueba 5: 'abcde12A' (cumple con todo)");
console.log("Resultado:", validarContraseña("abcde12A")); 
