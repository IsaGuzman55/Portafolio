var Usuarios = [{
    Nombre: "Laura",
    Correo: "Laura23@gmail.com",
    Contraseña: "1234",
},
{
    Nombre: "Diego",
    Correo: "Diego70@gmail.com",
    Contraseña: "12345",
}]

function IniciarSesion() {
    Usuarios.forEach(function (Usuario) {
      const Nombre = document.getElementById("Nombre-Usu");
      const correo = document.getElementById("Correo");
      const password = document.getElementById("password");
      const Errores = document.getElementById("Errores");

      if (Nombre.value != Usuario.Nombre){
        Nombre.classList.add("is-invalid");
        Nombre.classList.remove("is-valid");
      }else{
        Nombre.classList.add("is-valid");
        Nombre.classList.remove("is-invalid");
      }
      
      if(correo.value!=Usuario.Correo){
        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");
      }else{
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");
      }

      if(password.value != Usuario.Contraseña) {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
      }else{
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
      }

      if(Nombre.value == Usuario.Nombre && correo.value == Usuario.Correo && password.value == Usuario.Contraseña){
            sessionStorage.setItem("nombre", Usuario.Nombre);
            location.href = "./home.html";
        }
    })
}
