// Array para almacenar los nombres de los amigos
let amigos =[]; // Inicia un array vacio donde se almacenanran los nombres de los amigos.

// Funcion para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo'); // Obtiene el elemento DOM con id 'amigo' (un campo de entrada).
    const nombreAmigo = inputAmigo.value.trim();  // Obtiene el texto ingresado en el campo, eliminando espacios al inicio y al final.


// Validar que el campo no este vacio
if(nombreAmigo === "") {  // Verifica si el campo de entrada esta vacio.
    alert("Por favor inserte un nombre."); // Muestra una alerta si no hay texto ingresado.
    return; // Detiene la ejecucion de la funcion.
}

// Validar que el nombre no este duplicado
if(amigos.includes(nombreAmigo)) {  // Comprueba si el nombre ya existe en el array 'amigos'.
    alert(`El nombre "${nombreAmigo}" ya esta en la lista.` ); // Muestra una alarta indicando que el nombre esta duplicado.
    return; // Detiene la ejecucion de la funcion.
}

// Agregar el nombre al array de amigos
amigos.push(nombreAmigo); // Agrega el nombre del array 'amigos'.

// Limpiar el campo de entrada
inputAmigo.Value = ""; // Borra el texto del campo de entrada para que quede vacio despues de agragar el nombre.

// Actualizar la lista en el HTML
actualizarLista(); // Llama a la funcion 'actualizarlista' para reflejar los cambios en la interfaz de usuario.

}

// Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento del DOM con id 'listaAmigos'

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido anterior dentro del contenedor de la lista.

    // Recorrer el array con un bucle for
    for(let i = 0; i <amigos.length; i++) { // Itera sobre cada elemento en el array 'amigos'.
        const li = document.createElement('li'); // Crea un nuevo elemento <li> (elemento de lista).
        li.textContent = amigos[i]; // Asigna el texto del elemento <li> al nombre del amigo actual en el array.
        listaAmigos.appendChild(li); // Agrega el elemnto <li> al contenedor de la lista en el DOM.
    }

}


// Funcion para seleccionar amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length=== 0) { // Comprueba si el array 'amigos' esta vacio.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");  // Muestra una alerta si no hay amigos en la lista.
        return; // Detiene la ejecucion de la funcion.
    }

    // Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un numero aleatorio entre 0 y la longitud del array 

// Obtener el nombre del sorteado
const amigoSorteado = amigos[indiceAleatorio]; // Usa el indice aleatorio para obtener un nombre del array.

// Mostrar el resultado en el HTML
const resultado = document.getElementById('resultado');  // Obtiene el elemnto del DOM con id 'resultado' (donde se mostrara el nombre)
resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Actualiza el contenido del elemento con el nombre del sorteado.

}
