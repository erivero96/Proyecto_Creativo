

function iniciarSesion(usuario, contrasena) {
    // Simulación de datos de usuario almacenados
    const usuarios = [
        { nombre: 'usuario1', contrasena: 'contrasena1' },
        { nombre: 'usuario2', contrasena: 'contrasena2' }
    ];

    // Buscar el usuario en la lista de usuarios
    const usuarioEncontrado = usuarios.find(u => u.nombre === usuario && u.contrasena === contrasena);

    if (usuarioEncontrado) {
        console.log('Inicio de sesión exitoso');
        return true;
    } else {
        console.log('Nombre de usuario o contraseña incorrectos');
        return false;
    }
}


// Ejemplo de uso
iniciarSesion('usuario1', 'contrasena1');