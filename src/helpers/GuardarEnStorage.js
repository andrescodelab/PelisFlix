// Función para guardar en el almacenamiento local
// Para poder reutilizar a función, no solo con las películas, le pasamos una clave y un valor a guardar
export const GuardarEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave)) || [];

    // Verificar si elementos no es un array
    if (!Array.isArray(elementos)) {
        // Si no es un array, crear un array vacío
        elementos = [];
    }

    // Añadir el nuevo elemento al array
    elementos.push(elemento);

    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));
}