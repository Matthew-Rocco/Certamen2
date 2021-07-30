
const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let lecturas = await getLecturas();
            cargarTabla(lecturas);
            Swal.fire("Lectura Eliminada", "Lectura eliminada exitosamente", "info");
        } else {
            Swal.fire("Error","No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
}

const cargarTabla = (lecturas)=>{
    let tbody = document.querySelector("#tbody-lectura");
    tbody.innerHTML = "";
    for(let i=0; i < lecturas.length; ++i){
        let tr = document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = lecturas[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lecturas[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lecturas[i].medidor;
        let tdValor = document.createElement("td");

        let tdAcciones = document.createElement("td");

        let tipoMedida = lecturas[i].tipomedida;

        if(tipoMedida == "kilowatts"){
            tdValor.innerText = lecturas[i].valor + " kW";
        }else if(tipoMedida == "watts"){
            tdValor.innerText = lecturas[i].valor + " W";
        }else if(tipoMedida == "temperatura"){
            if(lecturas[i].valor >= 60){
                tdValor.innerText = lecturas[i].valor + " C 🔥"; //profe se que esta feisimo pero no supe como usar el fontawesome aqui xDD
            }else{
                tdValor.innerText = lecturas[i].valor + " C";
            }
        }




        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = lecturas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
};



document.addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let lecturas = await getLecturas(filtro);
    cargarTabla(lecturas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    let lecturas = await getLecturas();
    cargarTabla(lecturas);
});