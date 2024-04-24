// El usuario debe poder agregar nuevas tareas a la lista.
// El usuario debe poder marcar las tareas como completadas.
// El usuario debe poder eliminar tareas de la lista.
// El usuario debe poder ver todas las tareas pendientes y las completadas.
// Usar HTML Y css para adaptarlo a la web.
// Guardar las tareas en local storage.

//Si no hay nada en el local storage, crea una tarea de ejemplo
if (localStorage.getItem("tareas") == null) {
    let tareas = [{ nombre: "tarea_ejemplo_1", completada: false }]
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

const agregarTarea = () => {
    //trae el local storage, le agrega un obj, lo guarda de nuevo
    //en el local storage. Dsps llama la funcion que renderiza
    let tareas_storage = JSON.parse(localStorage.getItem("tareas"))
    let nombre = prompt('ingrese el nombre de la tarea:')
    let tarea = { nombre: nombre, completada: false }
    tareas_storage.push(tarea)
    localStorage.setItem("tareas", JSON.stringify(tareas_storage))
    mostrarElementos()
}

const marcarCompletadas = (nombre) => {
    //trae el local storage, cambia el estado de la tarea, lo manda al 
    //local storage de nuevo y llama la función que renderiza
    let tareas_storage = JSON.parse(localStorage.getItem("tareas"))
    tareas_storage = tareas_storage.map(t => {
        if (t.nombre == nombre) {
            return { ...t, completada: true };
        }
        return t;
    })
    localStorage.setItem("tareas", JSON.stringify(tareas_storage))
    mostrarElementos()
}
const borrarTarea = (nombre) => {
    //trae, filtra, manda y llama la func que renderiza
    let tareas_storage = JSON.parse(localStorage.getItem("tareas"))
    tareas_storage = tareas_storage.filter(t => t.nombre !== nombre)
    localStorage.setItem("tareas", JSON.stringify(tareas_storage))
    mostrarElementos()
}

const mostrarElementos = () => {
    //trae el local storage (tareas), lo itera y según si está completada
    //o incompleta agrega etiquetas html para mostrar la tarea en el index.html
    let tareas_storage = JSON.parse(localStorage.getItem("tareas"))
    let tabla_completado = ""
    let tabla_incompleto = ""
    tareas_storage.forEach((tarea) => {
        if (tarea.completada == false) {
            tabla_incompleto += `<tr><td>${tarea.nombre}</td>
            <td><button onclick="marcarCompletadas('${tarea.nombre}')">Marcar completada</button></td>
            <td><button onclick="borrarTarea('${tarea.nombre}')">borrar</button></td>
            </tr>`;
        } else {
            tabla_completado += `<tr><td>${tarea.nombre}</td>
            <td><button onclick="borrarTarea('${tarea.nombre}')">borrar</button></td>
            </tr>`;
        }
    });
    document.getElementById("tabla_completado").innerHTML = tabla_completado;
    document.getElementById("tabla_incompleto").innerHTML = tabla_incompleto;
}

mostrarElementos();
