
function validar_nombre() {
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el nombre");
        return false;
    };
    var nombre = document.forms["formulario"]["Apellidos"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el Apellido");
        return false;
    };
    var nombre = document.forms["formulario"]["opiniones"].value;
    if (nombre == null || nombre == 0) {
        alert("Añada opiniones");
        return false;
    };
    var nombre = document.forms["formulario"]["Apodo"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el Apodo");
        return false;
    };
    var nombre = document.forms["formulario"]["contrasena"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la contraseña");
        return false;
    };
    var nombre = document.forms["formulario"]["edad"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la edad");
        return false;
    };
    var nombre = document.forms["formulario"]["tel"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese el telefono");
        return false;
    };
    var nombre = document.forms["formulario"]["email"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la email");
        return false;
    };
    var nombre = document.forms["formulario"]["fecha"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la fecha de nacimiento");
        return false;
    };
    var nombre = document.forms["formulario"]["edad"].value;
    if (nombre == null || nombre == 0) {
        alert("Ingrese la edad");
        return false;
    };
};  

function validar_contrasena() {
    var contraseña = document.forms["formulario"]["contrasena"].value;
    if (contraseña == 0) {
        alert("La contaseña no estar vacia");
        return false;
    }
}
function validar_select() {
    indice = document.getElementById("opciones").value;
    if (indice == null || indice == 0) {
        alert("Escriba algo al menos");
        return false;
    };
};

function numerico() {
    var telefono = document.getElementById("tel").value;
    if (isNaN(telefono)) {  
        alert("Error: solo se admiten numeros");
        return false;
    }
}
function validar_email() {
    var valor = document.forms["formulario"]["email"].value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))) {
        alert("El email solo admite caracteres correspondidos")
        return false;
    }
};



