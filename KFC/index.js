function CambiarTema(){
    var theme = document.getElementById("Tema").value;
    var body = document.getElementById("body");

    if(theme == 1){
        body.classList.add("Theme-light");
        body.classList.remove("Theme-dark");
        body.classList.remove("Theme-free");
        localStorage.setItem("Color","Theme-light");
    }else if(theme == 2){
        body.classList.add("Theme-dark");
        body.classList.remove("Theme-light");
        body.classList.remove("Theme-free");
        localStorage.setItem("Color","Theme-dark");
    }else if(theme ==3){
        body.classList.add("Theme-free");
        body.classList.remove("Theme-light");
        body.classList.remove("Theme-dark");
        localStorage.setItem("Color","Theme-free");
    }
}



window.addEventListener("DOMContentLoaded", ()=>{
    var Colores = localStorage.getItem("Color");
    body.classList.remove("Theme-light");
    body.classList.add(Colores);
})