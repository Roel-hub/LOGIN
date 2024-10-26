function validarLogin() {
    // Definir usuario y contraseña correctos (puedes cambiarlos)
    const usuarioValido = "roel";
    const contrasenaValida = "medellin123";

    // Obtener los valores ingresados por el usuario
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Limpiar mensaje previo
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

    // Validar usuario y contraseña
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        mensaje.style.color = "green";
        mensaje.textContent = "Inicio de sesión exitoso";
        
        // Redirigir al usuario a index.html
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000); // Espera 1 segundo antes de redirigir
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
}
