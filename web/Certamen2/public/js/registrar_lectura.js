document.querySelector("#registrar-btn").addEventListener("click", async () => {

    let fecha = document.querySelector("#fecha-date").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipomedida = document.querySelector("#tipomedida-select").value.trim();    

    let errores = [];

    if(fecha === ""){
        errores.push("Debe ingresar una fecha");
    }
    if(hora === ""){
        errores.push("Debe ingresar una hora");
    }else if(!(hora.length == 5)){
        errores.push("Formato de hora incorrecto");
    }else if(!(hora[2]==":")){
        errores.push("Formato de hora incorrecto");
    }else if(isNaN(hora[0]) || isNaN(hora[1]) || isNaN(hora[3]) || isNaN(hora[4])){
            errores.push("La hora debe ser numerica");
    }
    
    if(direccion === ""){
        errores.push("Debe ingresar una direccion");
    }

    if(valor === ""){
        errores.push("Debe ingresar un valor");
    }else if(isNaN(valor)){
        errores.push("El valor debe ser numérico");
    }else if(+valor < 0){
        errores.push("El valor es incorrecto");
    }else if(+valor > 500){
        errores.push("El valor es incorrecto");
    }

    if(errores.length == 0){
        
        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipomedida = tipomedida;
        
        let res = await crearLectura(lectura);
        await Swal.fire("Lectura Creada", "Lectura creada exitosamente", "info");
        window.location.href = "mediciones_existentes";

    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    };
});