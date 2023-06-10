const ticket = 200;

let descuentoEstudiante,descuentoTrainee,descuentoJunior;

descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;

formulario = document.querySelector("#formulario");
cantidad = document.querySelector("#cantidad");
categoria = document.querySelector("#categoria");
total_p = document.querySelector("#totalAPagar");
btnResumen = document.querySelector("#resumen");
btnBorrar = document.querySelector("#borrar");

function calcularPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value){
        case "estudiante":
            total = total - (total * descuentoEstudiante)
            break;
        case "trainee":
            total = total - (total * descuentoTrainee)
            break;
        case "junior":
            total = total - (total * descuentoJunior)
            break;
    }

total_p.innerHTML = `Total a pagar: $ ${total}`;
}

btnResumen.addEventListener("click",(event)=> {
    event.preventDefault();
    comprobacion();
    calcularPago();
})

btnBorrar.addEventListener("click", ()=> formulario.reset());

function comprobacion (){
    nombre = document.querySelector('input[placeholder="Nombre"]').value
    apellido = document.querySelector('input[placeholder="Apellido"]').value
    correo = document.querySelector('input[placeholder="Correo"]').value

    if(nombre == '' && apellido == '' && correo == '') {
        alert('Completa tus datos personales');
        return
    }
    else if(nombre == ''){
        alert('Completa tu nombre');
        return
    }
    else if(apellido == ''){
        alert('Completa tu apellido');
        return
    }
    if(correo == ''){
        alert('Completa tu correo');
        return
    }
    else if(cantidad.value == '' || cantidad.value == 0){
        alert('Ingresa la cantidad de tickets que deseas comprar');
        return
    }
}