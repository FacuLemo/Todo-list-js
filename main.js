// El usuario debe poder agregar nuevas tareas a la lista.
// El usuario debe poder marcar las tareas como completadas.
// El usuario debe poder eliminar tareas de la lista.
// El usuario debe poder ver todas las tareas pendientes y las completadas.
// Usar HTML Y css para adaptarlo a la web.

//tareas debería ser [{nombre:x,completada:true},{},{}]
let tareas = [
    {nombre:"tarea1",completada:false},
    {nombre:"tarea2",completada:false},
    {nombre:"tarea3",completada:false},
    {nombre:"4t",completada:false}]

const marcarCompletadas = (nombre) => {
    let tarea = tareas.find(t => t.nombre == nombre)
    tarea.completada = true
    mostrarElementos()
}
const agregarTarea = () => {
    let nombre = prompt('ingrese el nombre de la tarea:')
    let tarea = {nombre:nombre, completada:false}
    tareas.push(tarea)
    mostrarElementos()
}
const borrarTarea = (nombre)=>{
    tareas = tareas.filter(t => t.nombre !== nombre)
    mostrarElementos()
}

const mostrarElementos = () => {
    let tabla_completado = ""
    let tabla_incompleto = ""
    tareas.forEach( (tarea) => {
        if (tarea.completada == false){
            tabla_incompleto += `<tr><td>${tarea.nombre}</td>
            <td><button onclick="marcarCompletadas('${tarea.nombre}')">Marcar completada</button></td>
            <td><button onclick="borrarTarea('${tarea.nombre}')">borrar</button></td>
            </tr>`;
        }else{
            tabla_completado += `<tr><td>${tarea.nombre}</td>
            <td><button onclick="borrarTarea('${tarea.nombre}')">borrar</button></td>
            </tr>`;
        }
    });
    document.getElementById("tabla_completado").innerHTML = tabla_completado;
    document.getElementById("tabla_incompleto").innerHTML = tabla_incompleto;
}

mostrarElementos();
