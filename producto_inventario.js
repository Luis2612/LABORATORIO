const inventario = [
    { nombre: "Camisa"},
    { nombre: "Zapatos"},
    { nombre: "Pantalón" },
    { nombre: "Gorra" }
];

function buscarProducto(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            return inventario[i];
        }
    }
    return null;
}


console.log("Búsquedas en el inventario");
console.log("Buscando 'Zapatos':", buscarProducto("Zapatos", inventario));
console.log("Buscando 'Camisa':", buscarProducto("Camisa", inventario));
console.log("Buscando 'Medias':", buscarProducto("Medias", inventario));
