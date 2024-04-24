
document.getElementById("registroForm").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Validar los campos del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var apellidoPaterno = document.getElementById("apellidop").value.trim();
    var apellidoMaterno = document.getElementById("apellidom").value.trim();
    var rut = document.getElementById("rut").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var fechadenacimineto = document.getElementById("fecha de nacimineto").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var genero = document.getElementById("genero").value.trim();
    var celular = document.getElementById("celular").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();

    var valido = true;

    // Validar nombre
    if (nombre === "") {
        document.getElementById("nombreError").textContent = "Por favor, ingresa tu nombre.";
        valido = false;
    } else {
        document.getElementById("nombreError").textContent = "";
    }

    // Validar apellido paterno
    if (apellidoPaterno === "") {
        document.getElementById("apellidopError").textContent = "Por favor, ingresa tu apellido paterno.";
        valido = false;
    } else {
        document.getElementById("apellidopError").textContent = "";
    }
    // Validar apellido materno
    if (apellidoMaterno === "") {
        document.getElementById("apellidomError").textContent = "Por favor, ingresa tu apellido materno.";
        valido = false;
    } else {
        document.getElementById("apellidomError").textContent = "";
    }
    // Validar rut
    if (rut === "") {
        document.getElementById("rutError").textContent = "Por favor, ingresa tu rut.";
        valido = false;
    } else {
        document.getElementById("rutError").textContent = "";
    }
    // Validar edad
    if (edad === "") {
        document.getElementById("edadError").textContent = "Por favor, ingresa tu edad.";
        valido = false;
    } else {
        document.getElementById("edadError").textContent = "";
    }
    // Validar fecha de nacimiento 
    if (fechadenacimineto === "") {
        document.getElementById("fechadenaciminetoError").textContent = "Por favor, ingresa tu fecha de nacimiento.";
        valido = false;
    } else {
        document.getElementById("fechadenaciminetoError").textContent = "";
    }
    // Validar correo 
    if (correo === "") {
        document.getElementById("correoError").textContent = "Por favor, ingresa tu correo.";
        valido = false;
    } else {
        document.getElementById("correoError").textContent = "";
    }
    // Validar genero 
    if (genero === "") {
        document.getElementById("generoError").textContent = "Por favor, ingresa tu genero.";
        valido = false;
    } else {
        document.getElementById("generoError").textContent = "";
    }
    // Validar celular
    if (celular === "") {
        document.getElementById("celularError").textContent = "Por favor, ingresa tu celular.";
        valido = false;
    } else {
        document.getElementById("celularError").textContent = "";
    }
    // Validar contraseña
    if (contraseña === "") {
        document.getElementById("contraseñaError").textContent = "Por favor, ingresa tu contraseña.";
        valido = false;
    } else {
        document.getElementById("contraseñaError").textContent = "";
    }

    // Si todos los campos son válidos, enviar el formulario
    if (valido) {
        console.log("El formulario es válido. Enviando datos...");
        // Para enviar el formulario
        this.submit();
    }
});

// Función para hacer que el botón "Enviar" funcione
var botonEnviar = document.getElementById("boton-enviar");
botonEnviar.addEventListener("click", function(event) {
    // Simular el envío del formulario cuando se hace clic en el botón
    // Esto activará la validación del formulario definida anteriormente
    document.getElementById("registroForm").submit();
});

    