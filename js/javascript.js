document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("age").addEventListener("input", function(event) {
        let input = event.target;
        input.value = input.value.replace(/[^0-9]/g, ""); // Elimina todo lo que no sea un número
    });

    document.getElementById("identification").addEventListener("input", function(event) {
        let input = event.target;
        input.value = input.value.replace(/[^0-9]/g, ""); // Elimina todo lo que no sea un número
    });

    document.getElementById("name").addEventListener("input", function(event) {
        let input = event.target;
        input.value = input.value.replace(/[^a-zA-Z\s]/g, ""); // Elimina todo lo que no sea una letra o espacio
    });

    document.getElementById("lastname").addEventListener("input", function(event) {
        let input = event.target;
        input.value = input.value.replace(/[^a-zA-Z\s]/g, ""); // Elimina todo lo que no sea una letra o espacio
    });
});

function validarInformacion() {

    let nombreInput = document.getElementById('name');
    let nombre = nombreInput.value;

    let apellidoInput = document.getElementById('lastname');
    let apellido = apellidoInput.value;

    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    let cedulaInput = document.getElementById('identification');
    let cedula = cedulaInput.value;

    let fechanacimientoInput = document.getElementById('fecha_nacimiento');
    let fechanacimiento = fechanacimientoInput.value;

    let edadInput = document.getElementById('age');
    let edad = edadInput.value;

    let departamentoInput = document.getElementById('deparment');
    let departamento = departamentoInput.value;

    let ciudadInput = document.getElementById('city');
    let ciudad = ciudadInput.value;

    if (!nombre){
        alert("Por favor digite su nombre");
        nombreInput.focus();
    }
    else if (!apellido){
        alert("Por favor digite su apellido");
        apellidoInput.focus();
    }
    else if (!email){
        alert("Por favor digite un correo");
        emailInput.focus();
    }
    else if (!cedula){
        alert("Por favor digite su cedula");
        cedulaInput.focus();
    }
    else if (!fechanacimiento){
        alert("Por favor digite su fecha");
        fechanacimientoInput.focus();
    }
    else if (!edad) {
        alert("Por favor digite su edad");
        edadInput.focus();
    }
    else if (!departamento){
        alert("Por favor seleccione su departamento");
        departamentoInput.focus();
    }
    else if (!ciudad){
        alert("Porfavor seleccione su ciudad");
        ciudadInput.focus();
    }
    else{
        alert("Gracias por diligenciar el formulario");
    }
}