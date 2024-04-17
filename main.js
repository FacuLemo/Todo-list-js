// El usuario debe poder agregar nuevas tareas a la lista.
// El usuario debe poder marcar las tareas como completadas.
// El usuario debe poder eliminar tareas de la lista.
// El usuario debe poder ver todas las tareas pendientes y las completadas.
// Usar HTML Y css para adaptarlo a la web.

//tareas debería ser [{nombre:x,completada:true},{},{}]
let tareas = [
    {nombre:"tarea1",completada:true},
    {nombre:"tarea2",completada:true},
    {nombre:"tarea3",completada:true},
    {nombre:"tarea4",completada:true}]

const marcarCompletadas = () => {

}
const agregarTarea = () => {
    let nombre = prompt('ingrese el nombre de la tarea:')
    let tarea = {nombre:nombre, completada:true}
    tareas.push(tarea)
    mostrarElementos()
}
const borrarTarea = (tarea)=>{
    let tareaObj = tareas.find(e=>e.nombre=tarea)
    console.log(tareaObj)
    tareas.pop(tareaObj)
    mostrarElementos()
}

const mostrarElementos = () => {
    let html = ""
    tareas.forEach( (tarea) => {
        html += `<tr><td>${tarea.nombre}</td>
        <td><button onclick="borrarTarea('${tarea.nombre}')">borrar</button>
        </td></tr>`;
    });
    document.getElementById("tareas_activas").innerHTML = html;
}
// Llamamos a la función para mostrar los elementos al cargar la página
mostrarElementos();
