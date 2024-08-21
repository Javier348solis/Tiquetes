let ingresar = document.getElementById("ingresar");
ingresar.addEventListener("click", function(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;
    if (nombre === "" || correo === "" || clave === "") alert("Rellene todos los espacios");
    else alert("Usuario ingresado");
    let listaObjetos = {
        nombre: nombre,
        correo: correo,
        clave: clave
    };
}) // ingresar.addEventListener("click", async() => {
 //     let datos = {
 //         nombre: nombre.value.trim(),
 //         correo: correo.value.trim(),
 //         clave: clave.value.trim(),
 //     }
 //     if (nombre.value==='' || correo.value==='' || clave.value==='') {
 //         //sweet alert
 //         }
 //         })
 // // Maneja el evento de submit del formulario
 // // document.getElementById('loginForm').addEventListener('submit', async function(event) {\
 // ingresar.addEventListener("click", async(e) => {
 //     e.preventDefault(); 
 //     // Obtén los valores de los campos
 //     const username = document.getElementById('nombre').value.trim();
 //     const correo = document.getElementById('correo').value.trim();
 //     const password = document.getElementById('clave').value.trim();
 //     // Verifica que ambos campos no estén vacíos
 //     if (username === '' || correo=== '' || password === '') {
 //         alert('Por favor, complete todos los campos.');
 //         return;
 //     }
 //     // Obtén los datos de los usuarios
 //     const usuarios = await getDatos();
 //     // Verifica si las credenciales coinciden con algún usuario
 //     const usuarioValido = usuarios.filter(usuario => 
 //         usuario.username === username && usuario.correo === correo && usuario.password === password
 //     );
 //     if (usuarioValido) {
 //         alert('Inicio de sesión exitoso!');
 //         // Aquí puedes redirigir a otra página o manejar el inicio de sesión como desees
 //     } else {
 //         alert('Nombre de usuario o contraseña incorrectos.');
 //     }
 // });
;

//# sourceMappingURL=Login.346d5ddf.js.map
