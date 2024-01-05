const NombreUsuario = sessionStorage.getItem("nombre");

const Usuario = document.getElementById("Usuario");
Usuario.textContent=NombreUsuario;

const body = document.getElementById("body");

if(!NombreUsuario){
    location.href = "./index.html";
}

if(NombreUsuario=="Laura"){
    body.classList.add("Fondo-M");
    body.classList.remove("Fondo-H");
}else if(NombreUsuario=="Diego"){
    body.classList.remove("Fondo-M");
    body.classList.add("Fondo-H");
}


function CerrarSesion(){
    location.href = "./index.html";
    sessionStorage.clear();
}